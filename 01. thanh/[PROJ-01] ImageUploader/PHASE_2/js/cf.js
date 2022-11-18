// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLdlz4XgMEud6_P0Teevd-KJKNAPBantA",
  authDomain: "uploadimg-aeabd.firebaseapp.com",
  projectId: "uploadimg-aeabd",
  storageBucket: "uploadimg-aeabd.appspot.com",
  messagingSenderId: "770456440883",
  appId: "1:770456440883:web:32d412c858abd84de91346",
  measurementId: "G-46620WNG13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
