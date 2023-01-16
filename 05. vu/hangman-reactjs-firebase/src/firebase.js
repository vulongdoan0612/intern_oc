// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyAjd4YPpXCt9KjC_rTD_qUfenGbpmYodRE",
  authDomain: "react2-e6d33.firebaseapp.com",
  projectId: "react2-e6d33",
  storageBucket: "react2-e6d33.appspot.com",
  messagingSenderId: "265942203971",
  appId: "1:265942203971:web:a940fa3f79ed11f920def6"
=======
  apiKey: "AIzaSyCpOZ1Gq5lAmcEiEz5tbroWT9GHA_yJnTo",
  authDomain: "game-1eae5.firebaseapp.com",
  projectId: "game-1eae5",
  storageBucket: "game-1eae5.appspot.com",
  messagingSenderId: "381145342119",
  appId: "1:381145342119:web:7f2167fd63146447967b82"
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
