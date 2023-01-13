// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpOZ1Gq5lAmcEiEz5tbroWT9GHA_yJnTo",
  authDomain: "game-1eae5.firebaseapp.com",
  projectId: "game-1eae5",
  storageBucket: "game-1eae5.appspot.com",
  messagingSenderId: "381145342119",
  appId: "1:381145342119:web:7f2167fd63146447967b82"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
