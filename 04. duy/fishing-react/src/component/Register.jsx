import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { database, auth } from "../firebase-config";
export const Register = () => {
  const db = getDatabase();
  let navigate = useNavigate();
  const [emailRe, setEmail] = useState("");
  const [passwordRe, setPassword] = useState("");
  const register = async () => {
    createUserWithEmailAndPassword(auth, emailRe, passwordRe)
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
          email: emailRe,
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
        // ..
      });
  };
  return (
    <div className="container register">
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
          Have a account ? <Link to="/login">Login now</Link>
        </div>
        <div class="d-grid gap-2">
          <button onClick={register} type="button" className="btn btn-primary ">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
