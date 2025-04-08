// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJc1WZA50dyifjTd-puOZOC9mQxScRGN4",
    authDomain: "whatsapp-mikhail.firebaseapp.com",
    projectId: "whatsapp-mikhail",
    storageBucket: "whatsapp-mikhail.firebasestorage.app",
    messagingSenderId: "218917934269",
    appId: "1:218917934269:web:0c309b60d260f6754853d4",
    measurementId: "G-P2TSLTFTKE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase services
const analytics = getAnalytics(app); // Optional
const auth = getAuth(app); // If using Firebase Authentication
const db = getFirestore(app); // If using Firestore
const storage = getStorage(app); // If using Storage

if (import.meta.env.DEV) {
    // connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Using Firebase emulators');
}

// Export the Firebase services for use in other components
export { app, analytics, auth, db, storage };