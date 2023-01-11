import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import classNames from "classnames/bind";
import styles from "../style/ScoreBoard.module.scss";
const cx = classNames.bind(styles);
export default function Login() {
  const onClick = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((results) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // ...
        // window.location.reload();
    

        // setTimeout(() => {
        //   console.log('cc')
        //   window.location.reload();
        // }, 2550);
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
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
