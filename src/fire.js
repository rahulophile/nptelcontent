// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// KEY CHANGE 1: 'getAnalytics' ki jagah 'getDatabase' import karna hai
import { getDatabase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLe0i_wmcLR8qTN_Vn4X1a6Z8O4EX93zI",
  authDomain: "nptel-live-counter.firebaseapp.com",
  databaseURL: "https://nptel-live-counter-default-rtdb.firebaseio.com",
  projectId: "nptel-live-counter",
  storageBucket: "nptel-live-counter.firebasestorage.app",
  messagingSenderId: "477680551171",
  appId: "1:477680551171:web:2ea543de9df4a22e2f1536",
  measurementId: "G-4SQGETT985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// KEY CHANGE 2: Database ko initialize karna hai aur use 'db' naam se EXPORT karna hai
// Taki LiveUsers.jsx file isse use kar sake
export const db = getDatabase(app);