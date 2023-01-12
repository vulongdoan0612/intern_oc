// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC5f2eJb3w8onZ_Wxq1UGW4ataFE032fU",
  authDomain: "hangman-bf819.firebaseapp.com",
  projectId: "hangman-bf819",
  storageBucket: "hangman-bf819.appspot.com",
  messagingSenderId: "600672886672",
  appId: "1:600672886672:web:c40cd3c307cf36c0dddd15",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
