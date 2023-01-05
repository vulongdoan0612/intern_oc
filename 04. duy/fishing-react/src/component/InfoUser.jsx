import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";

export const InfoUser = (props) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setEmail(user.email);
      } else {
        // User is signed out
        // ...
      }
    });
  });

  return (
    <div className=" info-user d-flex">
      <div className="user">
        <div className="email">{email}</div>
        <div className="credit">Credit: 100</div>
      </div>
      <p onClick={props.signout} className="sign-out">
        Sign out
      </p>
      <div className="avatar">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          className="rounded-circle"
        />
      </div>
    </div>
  );
};
