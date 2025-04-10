import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDSPTgVF7hN_Qb9ZXdwJ21lfvKC1RwxWg4",
    authDomain: "whatsapp-maya.firebaseapp.com",
    projectId: "whatsapp-maya",
    storageBucket: "whatsapp-maya.firebasestorage.app",
    messagingSenderId: "924575048389",
    appId: "1:924575048389:web:6289812eefb4cbe93c06ac",
    measurementId: "G-X0YBZS3N1T"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize Firebase services
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  if (import.meta.env.DEV) {
    // connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Using Firebase emulators');
}
  
  // Export the services for use in other files
  export { app, auth, db, storage };