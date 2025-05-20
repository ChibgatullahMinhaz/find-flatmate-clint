import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "find-roomies.firebaseapp.com",
  projectId: "find-roomies",
  storageBucket: "find-roomies.firebasestorage.app",
  messagingSenderId: "947563987927",
  appId: "1:947563987927:web:d3953fd244995fed360192",
  measurementId: "G-NZ36WYVC0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();