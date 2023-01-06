import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import {AuthStyled} from './AuthStyled'
import { registerWithEmailAndPassword } from "../../firebase"
const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <AuthStyled>
      <h2>or Create Account</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>

      <div>
        <button className="authBtn" onClick={() => registerWithEmailAndPassword(navigate, email,password, name)}>Sign Up</button>
      </div>
    </AuthStyled>
  );
};

export default Register;
