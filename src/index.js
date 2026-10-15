import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { handleAuthCallback } from '@netlify/identity';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
async function startApp() {
  // Process Identity email links before HashRouter reads the URL fragment.
  try {
    const result = await handleAuthCallback();
    if (result) window.location.hash = result.type === 'recovery' ? '/login?recovery=1' : '/welcome';
  } catch {
    sessionStorage.setItem('authCallbackError', 'This sign-in link is invalid or expired. Request a new link and try again.');
    window.location.hash = '/login';
  }
  root.render(<React.StrictMode><App /></React.StrictMode>);
}
startApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
