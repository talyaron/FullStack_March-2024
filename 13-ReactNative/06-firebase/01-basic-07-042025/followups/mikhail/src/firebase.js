import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the services for use in other files
export { app, auth, db, storage };