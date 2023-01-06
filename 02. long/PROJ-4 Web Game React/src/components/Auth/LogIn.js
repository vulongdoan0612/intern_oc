import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {AuthStyled} from './AuthStyled'
import { Link } from "react-router-dom"
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle'
import { logInWithEmailAndPassword } from "../../firebase"
const LogIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  return (
    <AuthStyled>
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

      <div>
        <button className="authBtn" onClick={() => logInWithEmailAndPassword(navigate, email, password)}>LOGIN</button>
      </div>


      <div className="login-gg">
        <div>or log in with</div>
        <LoginWithGoogle/>
      </div>

      <div className="or-re">
        <div>or</div>
        <Link to="/register">Register here</Link>
      </div>


    </AuthStyled>
  );
};

export default LogIn;
