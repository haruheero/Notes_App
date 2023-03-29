// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAklpOXuu1MRtyHts8brun3eij5F1qHf9Y",
  authDomain: "notes-app-25f7a.firebaseapp.com",
  projectId: "notes-app-25f7a",
  storageBucket: "notes-app-25f7a.appspot.com",
  messagingSenderId: "180386574356",
  appId: "1:180386574356:web:fb6d1b7582f185b4e2f701",
  measurementId: "G-PPBWVT98HC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
