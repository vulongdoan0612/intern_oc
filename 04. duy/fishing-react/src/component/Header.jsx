import React, { useEffect, useState } from "react";
import { InfoUser } from "./InfoUser";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export const Header = (props) => {
  const statusUser = localStorage.getItem("users");

  // setEmail(users.email);
  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("sign out successfully");
        localStorage.removeItem("users");
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
        {statusUser ? (
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
