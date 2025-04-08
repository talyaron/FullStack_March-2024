// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM0UDid0JRm-1Jy9ED0KghfImD5p2FX2s",
  authDomain: "whatsapp21apr.firebaseapp.com",
  projectId: "whatsapp21apr",
  storageBucket: "whatsapp21apr.firebasestorage.app",
  messagingSenderId: "211586396872",
  appId: "1:211586396872:web:1f694470c10f926c812bfd",
  measurementId: "G-0P8J4WHJCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

if (import.meta.env.DEV) {
  // connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, "localhost", 8080);
  // connectStorageEmulator(storage, 'localhost', 9199);
  console.log("Using Firebase emulators");
}

// Export the services for use in other files
export { app, auth, db, storage };
