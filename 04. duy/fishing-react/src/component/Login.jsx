import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../firebase-config";
export const Login = () => {
  let navigate = useNavigate();
  const [emailLogin, setEmail] = useState("");
  const [passwordLogin, setPassword] = useState("");
  const login = async () => {
    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        set(ref(database, "users/" + user.uid), {
          id: user.uid,
          credit: 100,
          token: 2,
          highscore: 0,
        });
        const dataUser = {
          id: user.uid,
          email: emailLogin,
          credit: 100,
          token: 100,
          highscore: 0,
        };

        localStorage.setItem("users", JSON.stringify(dataUser));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
        <div class="d-grid gap-2">
          <button onClick={login} type="button" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>{" "}
    </div>
  );
};
