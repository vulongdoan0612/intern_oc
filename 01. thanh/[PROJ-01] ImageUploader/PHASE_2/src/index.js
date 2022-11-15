import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCNBJwdhcUJOQ59Rxz0EEbr71ouoy3SjBs",
  authDomain: "upimage-101a4.firebaseapp.com",
  projectId: "upimage-101a4",
  storageBucket: "upimage-101a4.appspot.com",
  messagingSenderId: "575808870744",
  appId: "1:575808870744:web:e14fdb18f82411a6246d2d",
  measurementId: "G-5R8007LZ8V"
});
const db = getFirestore(firebaseApp);

async function loadCity(name) {
  const cityDoc = doc(db, `cities/${name}`);
  const snapshot = await getDoc(cityDoc);
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}






function onBtnUploadImg() {
  "use strict";
  const ref = firebase.storage().ref();
  const file = document.querySelector('.inp-upload');
  const metadata = {
    contentType: file.name
  };
  const name = file.name;
  const uploadIMG = ref.child(name).put(file, metadata);
  uploadIMG
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url)
    })
    .catch(console.error)
}