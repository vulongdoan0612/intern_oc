// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRQKNEhfJ_tY7_VxEbotwrEySXz-ETTeA",
  authDomain: "hangmanthird.firebaseapp.com",
  projectId: "hangmanthird",
  storageBucket: "hangmanthird.appspot.com",
  messagingSenderId: "154779391468",
  appId: "1:154779391468:web:a1bd1726cc2af1dca89cc9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };