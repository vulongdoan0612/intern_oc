import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {StyledAuth} from './Auth-styled'

import {
  notificationError,
  notificationSuccess,
} from "../../utils/Notification"
import { logInWithEmailAndPassword } from "../../firebase"
const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  return (
    <StyledAuth>
      <h2>Log In</h2>
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

      <div><button className="authBtn" onClick={() => logInWithEmailAndPassword(navigate, email, password)}>Login</button></div>
    </StyledAuth>
  );
};

export default SignIn;
