import firebase,{ initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import { notificationError, notificationSuccess } from "./utils/Notification";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC-_qBK6ZO9lYchLcoS1M62RbB2FYSTHVY",
  authDomain: "music-player-auth-87892.firebaseapp.com",
  projectId: "music-player-auth-87892",
  storageBucket: "music-player-auth-87892.appspot.com",
  messagingSenderId: "677423525545",
  appId: "1:677423525545:web:32203fbe35fd98f0b403b8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async (navigate) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      navigate("/")
      notificationSuccess("Login successfuly")
    }
  } catch (err) {
    console.error(err);
    notificationSuccess(err.message)
  }
};


export const logInWithEmailAndPassword = async (navigate, email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
    notificationSuccess("Login successfuly")
  } catch (err) {
    console.error(err);
    notificationError(err.message);
  }
};

export const registerWithEmailAndPassword = async (navigate, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
    notificationSuccess("Register successfuly")
  } catch (err) {
    console.error(err);
    notificationError(err.message)
  }
};


export const logout = (navigate) => {
  signOut(auth);
  navigate("/login-page")
  notificationSuccess("Log out successfuly")
};