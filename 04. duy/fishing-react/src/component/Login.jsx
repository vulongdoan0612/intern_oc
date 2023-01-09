import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginFirebase } from "../service/auth";
import { toastNoti } from "../service/toastNoti";
export const Login = () => {
  let navigate = useNavigate();
  const [emailLogin, setEmail] = useState("");
  const [passwordLogin, setPassword] = useState("");
  const login = async () => {
    let user = await loginFirebase(emailLogin, passwordLogin);
    if (user) {
      toastNoti("Login success");
      navigate("/");
    }
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
      </form>
    </div>
  );
};
