import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { login, getSettings, signup, requestPasswordRecovery, updateUser } from '@netlify/identity';
import Login from './pages/Login';
import Signup from './pages/signup';

jest.mock('@netlify/identity', () => ({
  login: jest.fn(), getSettings: jest.fn(), signup: jest.fn(),
  requestPasswordRecovery: jest.fn(), updateUser: jest.fn(), oauthLogin: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
  window.location.hash = '';
  getSettings.mockResolvedValue({ providers: {} });
});

function renderLogin() {
  return render(<MemoryRouter initialEntries={['/login']}><Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/welcome" element={<p>Store home</p>} />
  </Routes></MemoryRouter>);
}

function fillLogin() {
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'shopper@example.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'test-password' } });
}

test('signs in and navigates without saving the password', async () => {
  login.mockResolvedValue({ email: 'shopper@example.com' });
  renderLogin();
  fillLogin();
  fireEvent.click(screen.getByLabelText('Remember email'));
  fireEvent.click(screen.getByRole('button', { name: 'Login' }));
  expect(await screen.findByText('Store home')).toBeInTheDocument();
  expect(login).toHaveBeenCalledWith('shopper@example.com', 'test-password');
  expect(localStorage.getItem('savedUsername')).toBe('shopper@example.com');
  expect(localStorage.getItem('savedPassword')).toBeNull();
});

test('shows failed login and lets the user retry', async () => {
  login.mockRejectedValue({ status: 401 });
  renderLogin();
  fillLogin();
  fireEvent.click(screen.getByRole('button', { name: 'Login' }));
  expect(await screen.findByRole('alert')).toHaveTextContent('Check your email and password');
  expect(screen.getByRole('button', { name: 'Login' })).toBeEnabled();
});

test('requests a password reset from the email field', async () => {
  requestPasswordRecovery.mockResolvedValue(undefined);
  renderLogin();
  fillLogin();
  fireEvent.click(screen.getByText('Forgot Password?'));
  expect(await screen.findByRole('status')).toHaveTextContent('password reset link');
  expect(requestPasswordRecovery).toHaveBeenCalledWith('shopper@example.com');
});

test('recovery saves the new password', async () => {
  window.location.hash = '/login?recovery=1';
  updateUser.mockResolvedValue({});
  renderLogin();
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'new-test-password' } });
  fireEvent.click(screen.getByRole('button', { name: 'Update password' }));
  expect(await screen.findByText('Store home')).toBeInTheDocument();
  expect(updateUser).toHaveBeenCalledWith({ password: 'new-test-password' });
  expect(login).not.toHaveBeenCalled();
});

test('signup creates an account and explains email confirmation', async () => {
  signup.mockResolvedValue({ emailVerified: false });
  render(<MemoryRouter><Signup /></MemoryRouter>);
  fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'Shopper' } });
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'shopper@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'test-password' } });
  fireEvent.click(screen.getByRole('checkbox'));
  fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));
  await waitFor(() => expect(signup).toHaveBeenCalledWith('shopper@example.com', 'test-password', { full_name: 'Shopper' }));
  expect(await screen.findByRole('status')).toHaveTextContent('confirm your account');
});
