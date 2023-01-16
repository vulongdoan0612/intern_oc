// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjd4YPpXCt9KjC_rTD_qUfenGbpmYodRE",
  authDomain: "react2-e6d33.firebaseapp.com",
  projectId: "react2-e6d33",
  storageBucket: "react2-e6d33.appspot.com",
  messagingSenderId: "265942203971",
  appId: "1:265942203971:web:a940fa3f79ed11f920def6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
