// src/pages/firebase-config.jsx
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || "AIzaSyCvqWruTJSwzTaRK3oEvByut9MymP9RLCA",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || "my-frontend-project-4cd57.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL || "https://my-frontend-project-4cd57-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: process.env.REACT_APP_PROJECT_ID || "my-frontend-project-4cd57",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "my-frontend-project-4cd57.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "827745696594",
  appId: process.env.REACT_APP_APP_ID || "1:827745696594:web:352bd1759440780d3c588b",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID || "G-H7EDYQCH5Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Export both the auth instance and getAuth function
export { auth, db, googleProvider, facebookProvider, signInWithPopup, getAuth };