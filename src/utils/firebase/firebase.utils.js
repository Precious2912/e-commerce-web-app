import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_IREYEs2uUUwWGM7oWwFhjoOV9wB40_I",
  authDomain: "shopovat-db.firebaseapp.com",
  projectId: "shopovat-db",
  storageBucket: "shopovat-db.appspot.com",
  messagingSenderId: "564632110968",
  appId: "1:564632110968:web:045e0aa10dc7f7dfb02a8d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);