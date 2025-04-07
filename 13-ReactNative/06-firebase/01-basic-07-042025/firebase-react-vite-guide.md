# Initializing Firebase in React with Vite

This guide walks you through the process of setting up and initializing Firebase in a React project built with Vite.

## Prerequisites

- Node.js installed on your machine
- npm or yarn package manager
- A Firebase account

## Step 1: Create a new React project with Vite

```bash
npm create vite@latest my-firebase-app -- --template react
cd my-firebase-app
```

## Step 2: Install Firebase

```bash
npm install firebase
```

## Step 3: Create a Firebase project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click on "Add project"
3. Follow the setup wizard to create a new Firebase project
4. Once your project is created, click on the web icon (</>) to add a web app to your project
5. Register your app with a nickname and click "Register app"
6. Firebase will provide you with a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};
```

## Step 4: Create a Firebase configuration file

Create a new file `src/firebase.js` and add the following code:

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Optional
import { getAuth } from "firebase/auth"; // If using Firebase Authentication
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage"; // If using Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app); // Optional
const auth = getAuth(app); // If using Firebase Authentication
const db = getFirestore(app); // If using Firestore
const storage = getStorage(app); // If using Storage

// Export the Firebase services for use in other components
export { app, analytics, auth, db, storage };
```

Make sure to replace the placeholder values in `firebaseConfig` with your actual Firebase configuration.

## Step 5: Import and use Firebase in your components

Now you can import the Firebase services in any component where you need them:

```jsx
import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

function MyComponent() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  // Example of fetching data from Firestore
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "yourCollection"));
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setData(documents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {user ? <p>Welcome, {user.email}!</p> : <p>Please sign in</p>}
      <button onClick={fetchData}>Fetch Data</button>
      {data.map(item => (
        <div key={item.id}>{/* Render your data */}</div>
      ))}
    </div>
  );
}

export default MyComponent;
```

## Step 6: Creating a Firebase Context (Optional)

For better organization and to avoid importing Firebase in multiple components, you can create a Firebase context:

```jsx
// src/contexts/FirebaseContext.js
import { createContext, useContext } from 'react';
import { app, auth, db, storage } from '../firebase';

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ app, auth, db, storage }}>
      {children}
    </FirebaseContext.Provider>