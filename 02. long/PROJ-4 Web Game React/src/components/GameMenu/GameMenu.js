import { GameMenuStyled } from "./GameMenuStyled"
import {Link} from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';
import { GAME_LIST } from "../../mock/data";

const gameList = GAME_LIST

const Games=({image,name,id})=>{
    return (
        <Link to={"/game/"+id}>
            <div className="game-item">
                <div className="game-thumb">
                    <img src={ image }></img>
                </div>
                <div className="game-name">{name}</div>
                <div className="play-hover">
                    <FaPlayCircle/>
                </div>
            </div>
            
        </Link>
        
    )
}

function GameMenu() {
    return (
        <GameMenuStyled>
            <div className="title">All games</div>
            <div className="list-game">
                {gameList.map((item, index)=>(
                    <Games 
                        prop={item} 
                        index={index} 
                        image={item.image} 
                        name={item.name}
                        id={item.id}
                    />
                ))}
                <div className="clear"></div>
            </div>
        </GameMenuStyled>
    )
}


export default GameMenu


// function GameMenu() {

//     return (
//         <GameMenuStyled>

//             <div className="" >
//                 {gameList.map( (game, index) =>
//                     <Link to={"/game/"+game.id}>
//                         <div className="gameItem">
//                             <div className="gameThumb">
//                                 <img src={ game.image }></img>
//                             </div>
//                             <div className="gameName">{game.name}</div>
//                         </div>
//                     </Link>
//                 )}
//             </div>
//         </GameMenuStyled>
//     )
// }


// export default GameMenu
