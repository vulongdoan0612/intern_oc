import React from "react";
import { useEffect, useState } from "react";
import { GameItemStyled } from "./GameItemStyle"
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom"
import { GAME_LIST } from "../../mock/data";


const GameItem = (props) => {
    const { gameId } = useParams()
    const [game, setGame] = useState()

    useEffect(()=>{
        console.log("gameId", gameId )
        const game = GAME_LIST.find((game)=> game.id.toString() === gameId)
        if(game) {
            setGame(game)
        }
    },[gameId])

    return (
        <div className="container">
            <GameItemStyled>
                {game ? (
                    <>
                        
                        <div className="gameItem">
                            <div className="name">{ game.name }</div>
                            <div className="playground">
                                <iframe src={ game.path }></iframe>
                            </div>
                        </div> 
                    </>
                ) : (
                    <>
                        <h1>No game found</h1>
                    </>
                )}
            </GameItemStyled>
        </div>
    )
}

export default GameItem