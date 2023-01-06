import styled from "styled-components"

export const GameMenuStyled = styled.div`
        .title {
            text-align: center;
            font-size: 30px;
            /* margin: 30px 0; */
        }

        .list-game a {
            color: #fff;
            text-decoration: none;
        }
        .list-game a:hover {
            color: var(--pr-color);
        }
        .list-game a:hover .game-name  {
            color: #fff;
        }

        .list-game {
            display: flex;
            flex-wrap: wrap;
            justify-content:  flex-start;
            margin: 0 -20px;
            margin-top: 40px;
            text-shadow: 2px 2px 4px #000000;
        }
        .game-item {
        position: relative;
        width: 200px; 
        margin: 20px;
        }
        
        .game-thumb {
            width: 100%;
            height: 200px;
        }
        .game-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .game-name {
            font-size: 20px;
            margin-top: 5px;
            height: 27px;
        }
        .play-hover {
            top: 0;
            right: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: calc(100% - 32px);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            background: rgba(5,0,0,0.6);
            opacity: 0;
            -webkit-transition: ease-in 0.1s;
            transition: ease-in 0.1s;
        }
        .game-item:hover .play-hover {
            opacity: 1;
        }

        svg {
            font-size: 80px;
        }
`