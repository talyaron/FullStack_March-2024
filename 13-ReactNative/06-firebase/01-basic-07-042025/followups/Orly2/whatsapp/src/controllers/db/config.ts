// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore,connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCFq-mqrCXW0cS3Xp8_1qHKpJ3mhEPx3ak",
  authDomain: "whatsapp-orly.firebaseapp.com",
  projectId: "whatsapp-orly",
  storageBucket: "whatsapp-orly.firebasestorage.app",
  messagingSenderId: "380912750813",
  appId: "1:380912750813:web:136a02b17a06e83f610b34",
  measurementId: "G-JEQXMB5GT5"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);
if (import.meta.env.DEV) {
    // connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Using Firebase emulators');
}
