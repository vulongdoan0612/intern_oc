// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3noM7-t4dF5AOtfTV-cHwNX5hcT-L-zg",
  authDomain: "hangman-578c0.firebaseapp.com",
  projectId: "hangman-578c0",
  storageBucket: "hangman-578c0.appspot.com",
  messagingSenderId: "628931470237",
  appId: "1:628931470237:web:fd1a0a0dee305772300574"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
