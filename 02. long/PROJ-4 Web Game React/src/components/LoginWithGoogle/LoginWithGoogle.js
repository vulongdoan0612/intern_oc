import React from "react";
import { signInWithGoogle } from "../../firebase"
import {useNavigate} from "react-router-dom"
import { LoginWithGoogleStyled } from "./LoginWithGoogle-styled"
import { FaGoogle } from 'react-icons/fa';


function LoginWithGoogle() {
  const navigate = useNavigate()
  return (
    <LoginWithGoogleStyled>
      <button className="ggBtn" onClick={() => signInWithGoogle(navigate)}> <FaGoogle /></button>
    </LoginWithGoogleStyled>
  )
}

export default LoginWithGoogle
