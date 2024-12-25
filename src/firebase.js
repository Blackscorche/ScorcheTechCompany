import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getFirestore } from "firebase/firestore"; // If using Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBpl5oKubJx-C3kmCJzmKu_dFsWScB8zT4",
  authDomain: "scorchetech-5ddca.firebaseapp.com",
  projectId: "scorchetech-5ddca",
  storageBucket: "scorchetech-5ddca.appspot.com",
  messagingSenderId: "529641477963",
  appId: "1:529641477963:web:28455c4d7469fa6ec63ace",
  measurementId: "G-3S9KE3NYC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export auth and db if needed
