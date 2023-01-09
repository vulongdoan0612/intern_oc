// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCbd839qUfdSr2RB_hHXWcjWeU3QnjvjYM",
  authDomain: "fir-game-958cd.firebaseapp.com",
  projectId: "fir-game-958cd",
  storageBucket: "fir-game-958cd.appspot.com",
  messagingSenderId: "940202555641",
  appId: "1:940202555641:web:c2c9717ab4925e17e68a28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
