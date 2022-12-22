import React from "react";
import { signInWithGoogle } from "../../firebase"
import {useNavigate} from "react-router-dom"
import { LoginWithGoogleStyled } from "./LoginWithGoogle-styled"
function LoginWithGoogle() {
  const navigate = useNavigate()
  return (
    <LoginWithGoogleStyled>
      <h2>or</h2>
      <div>
        <button className="ggBtn" onClick={() => signInWithGoogle(navigate)}>Login With Google</button>
      </div>
    </LoginWithGoogleStyled>
  )
}

export default LoginWithGoogle
