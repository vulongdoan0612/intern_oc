import React, { useEffect, useState } from "react";
import { InfoUser } from "./InfoUser";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { toast } from "react-toastify";

export const Header = (props) => {
  // const statusUser = localStorage.getItem("users");
  const [status, setStatus] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setStatus(true);
      console.log(uid);
    } else {
      // User is signed out
      // ...
    }
  });
  // setEmail(users.email);
  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.info("Logout ");
        setStatus(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Trang chủ
        </Link>
        {status ? (
          <InfoUser signout={signout} />
        ) : (
          <div>
            <Link to="login" className="btn btn-outline-success me-2">
              Login
            </Link>
            <Link to="register" className="btn btn-outline-info">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
