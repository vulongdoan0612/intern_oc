import React, { useEffect, useState } from "react";
import { InfoUser } from "./InfoUser";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { toast } from "react-toastify";
import logo from "../assets/image/logo3.jpg";
export const Header = (props) => {
  // const statusUser = localStorage.getItem("users");
  const [status, setStatus] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setStatus(true);
    } else {
      // User is signed out
      // ...
    }
  });
  // setEmail(users.email);
  const signout = () => {
    signOut(auth)
      .then(() => {
        toast.info("Logout");
        // modify
        localStorage.removeItem("token");
        setStatus(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar navbar-light ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        {status ? (
          <InfoUser signout={signout} />
        ) : (
          <div>
            <Link to="login" className="btn button-89 me-2">
              Login
            </Link>
            <Link to="register" className="btn button-89 ">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
