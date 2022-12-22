import React from "react"
import { UserLoginStyled } from "./UserLogin-styled"
import { Link } from "react-router-dom"
import { auth, logout } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
export default function UserLogin() {
    const [user] = useAuthState(auth)
    const email = user ? user.email.match(/^([^@]*)@/) : ""
    const navigate = useNavigate()
    return (
        <UserLoginStyled>
            <div className="user-name">
                {/* <div className='user-name'><span>💂‍♂️</span> Nhat Long</div> */}
                <div className="user-avatar">
                    {user ? <img src={user.photoURL} alt="" /> : <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"/>}
                </div>
                {email ? email[1] : "Log In"}
            </div>

            <div className="user-setting">
                <div className="setting-item">Setting</div>
                <div className="setting-item">Premium</div>
                <div className="setting-item">
                    {user && user.email ? (
                        <span onClick={() =>logout(navigate)}>Log Out</span>
                    ) : (
                        <Link to="/login-page">Login</Link>
                    )}
                </div>
            </div>
        </UserLoginStyled>
    );
}

