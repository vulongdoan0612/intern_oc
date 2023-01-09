import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerFirebase } from "../service/auth";
import { toastNoti } from "../service/toastNoti";
import { addDataUser } from "../service/users";
export const Register = () => {
  let navigate = useNavigate();
  const [emailRe, setEmail] = useState("");
  const [passwordRe, setPassword] = useState("");
  const register = async () => {
    const userRegister = await registerFirebase(emailRe, passwordRe);
    if (userRegister) {
      let docRef = await addDataUser(
        userRegister.uid,
        userRegister.email,
        100,
        2,
        0
      );
      toastNoti("Register success");
      navigate("/");
    }
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
