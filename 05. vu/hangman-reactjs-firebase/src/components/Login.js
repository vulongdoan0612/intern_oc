import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, db } from "../firebase";
import classNames from "classnames/bind";
import styles from "../style/ScoreBoard.module.scss";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useStateContext } from "../ContextProvider";
import { getToken } from "../services/user";
const cx = classNames.bind(styles);
export default function Login() {
  const { setUser } = useStateContext();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      const q = query(
        collection(db, "leaderBoard"),
        where("uid", "==", `${auth.currentUser.uid}`)
      );
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "leaderBoard"), {
          uid: auth.currentUser.uid,
          money: 100,
          highScoreLocal: 0,
          tokenLocal: 3,
          timestamp: serverTimestamp(),
          user: auth.currentUser.displayName,
          email: auth.currentUser.email,
          userImg: auth.currentUser.photoURL,
        });
      }
      const data = await getToken();
      setUser(data[0]);
      // localStorage.setItem("token", user?.ttokenLo);
    } catch (err) {
      console.error(err);
    }
  };

  const onClick = async () => {
    signInWithGoogle();
  };
  return (
    <div className={cx("login")}>
      <img
        src="https://st2.depositphotos.com/1441191/7465/v/450/depositphotos_74658049-stock-illustration-see-you-wallpaper-background.jpg"
        alt=""
      ></img>
      <button className="btn" onClick={onClick}>
        Login With Google
      </button>
    </div>
  );
}
