import React, {useEffect,useState} from 'react'
import { UserBtnStyled } from './UserBtnStyled'
import { Link } from "react-router-dom"
import { auth, logout } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { app } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"

export default function UserLogin() {



    const [user] = useAuthState(auth)
    const email = user ? user.email.match(/^([^@]*)@/) : ""
    const navigate = useNavigate()

    const [listUser, setListUser] = useState([])

    useEffect(() => {
        async function getListUser() {
            const querySnapshot = await getDocs(collection(db, "users"))
            querySnapshot.map((doc) => {
                setListUser((user) => [...user, doc.data()])
            })
        }
        getListUser();
    }, []);
    console.log("listUser:", listUser)
      
    // const thisUser = listUser.find(userI => userI.email === user.email);
    // console.log("listUser:", listUser)

    // const balances = thisUser.balance
    // console.log(balances)


    
    return (
        <UserBtnStyled>
            <div className="user-name">
                <div className="user-avatar">
                    {user ? <img src={user.photoURL} alt="" /> : <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"/>}
                </div>
                <div>
                    <div>{email ? email[1] : "Log In"}</div>
                    <div className='balance'>Credit: {} <div> </div> </div>
                </div>
            </div>

            <div className="user-setting">
                <div className="setting-item">Account Setting</div>
                <div className="setting-item">
                    {user && user.email ? (
                        <span onClick={() =>logout(navigate)}>Log Out</span>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </div>
        </UserBtnStyled>
    );
}