import React from 'react'
import {useEffect,useState} from 'react'
import { collection, getDocs } from "firebase/firestore"
import { LeaderboardStyled } from './LeaderboardStyled'
import { db } from "../../firebase"

const Leaderboard = () => {

    const [listUser, setListUser] = useState([])

    useEffect(() => {
        async function getListUser() {
            const querySnapshot = await getDocs(collection(db, "users"))
            querySnapshot.forEach((doc) => {
                setListUser((user) => [...user, doc.data()])
            })
        }
        getListUser();
    }, []);
    console.log("listUser:", listUser)


    return (
        <LeaderboardStyled>
            <div class="header">LEADERBOARD</div>
            <div class="list">
                {
                listUser.length > 0
                ?   listUser.map((user, key = 0, index) => (
                        <div className='item'>
                            <div className='avatar'>
                                <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"/>
                            </div>
                            <div className='score'>
                                <div>{user.name}</div>
                                <div>{user.score}</div>
                            </div>
                        </div>
                    ))
                :   null
                }
            </div>
        </LeaderboardStyled>
    )
}

export default Leaderboard