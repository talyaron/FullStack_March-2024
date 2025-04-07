// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzY4JCtID42vv60cIH0Sz00aFhMTcXnlg",
  authDomain: "whatsapp-yoss.firebaseapp.com",
  projectId: "whatsapp-yoss",
  storageBucket: "whatsapp-yoss.firebasestorage.app",
  messagingSenderId: "975580897022",
  appId: "1:975580897022:web:1503806680485710434faf",
  measurementId: "G-YWWP2D2ZZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);