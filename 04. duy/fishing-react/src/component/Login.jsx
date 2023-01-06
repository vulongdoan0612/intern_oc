import { signInWithEmailAndPassword } from "firebase/auth";
import { child, get, onValue, ref, set } from "firebase/database";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../firebase-config";
import { toast } from "react-toastify";
export const Login = () => {
  let navigate = useNavigate();
  const [emailLogin, setEmail] = useState("");
  const [passwordLogin, setPassword] = useState("");
  const login = async () => {
    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then((userCredential) => {
        let user = userCredential.user;
        get(child(ref(database), `/users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              localStorage.setItem("users", JSON.stringify(snapshot.val()));
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
        toast.success("Login success ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="container login">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 ">
          Create account <Link to="/register">Register</Link>
        </div>
        <div className="d-grid gap-2">
          <button onClick={login} type="button" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>{" "}
    </div>
  );
};
