import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBpqJ2rjKIFEPlSvpFUff2hxejqbFef3Cw',
  authDomain: 'snakegame-65871.firebaseapp.com',
  projectId: 'snakegame-65871',
  storageBucket: 'snakegame-65871.appspot.com',
  messagingSenderId: '398212705607',
  appId: '1:398212705607:web:a14686d05607ecf703f062',
  measurementId: 'G-3Z4STEF0CH',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
