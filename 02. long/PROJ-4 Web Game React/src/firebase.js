import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import { notificationError, notificationSuccess } from "./utils/Notification";
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyD5lfpgGMhBOjV2rU3dK8UzfLIc77FqvbQ",
    authDomain: "game-storage-ed3c3.firebaseapp.com",
    projectId: "game-storage-ed3c3",
    storageBucket: "game-storage-ed3c3.appspot.com",
    messagingSenderId: "992138388891",
    appId: "1:992138388891:web:80e6e2ba557c1a1f242d3e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);



const userScore = JSON.parse(localStorage.getItem('highscore'));


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
                score: 0,
                balance: 100
            });
        }
        navigate("/")
        notificationSuccess("Login successfuly")
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
            score: 0,
            balance: 100
        });
        notificationSuccess("Register successfuly")
    } catch (err) {
        console.error(err);
        notificationError(err.message)
    }
};


export const logout = (navigate) => {
    signOut(auth);
    navigate("/")
    notificationSuccess("Log out successfuly")
};












