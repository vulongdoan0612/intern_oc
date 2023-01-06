// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBzOfwRPesMiSzqBc-o9rD70NYc5OghC0",
  authDomain: "hangman-72672.firebaseapp.com",
  projectId: "hangman-72672",
  storageBucket: "hangman-72672.appspot.com",
  messagingSenderId: "1053217766761",
  appId: "1:1053217766761:web:5cd51ca4efacb8f08bd1f8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };