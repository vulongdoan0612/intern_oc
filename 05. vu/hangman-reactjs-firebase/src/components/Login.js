import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

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
    <div>
      <button className="btn" onClick={onClick}>
        Login With Google
      </button>
    </div>
  );
}