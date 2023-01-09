import styled from "styled-components"

export const LeaderboardStyled = styled.div`
    width: calc(30% - 30px);
    margin-left: 30px;
    border: 9px solid var(--pr-color);
    margin-top: 39.2px;
    /* text-align: center; */
    padding:  45px 25px;
    border-radius: 5px;
    background: #ecf0f3;
    box-shadow: 13px 13px 20px #093034, -13px -13px 20px transparent;
    color: var(--text-color);
    position: relative;
    
    .header {
        position: absolute;
        border: 7px solid var(--pr-color);
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        padding: 5px ;
        border-radius: 5px;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -62%);
        background: #ecf0f3;
        
    }
    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        
    }
    .avatar {
        width: 45px;
        height: 45px;
        border: 2px solid;
        border-radius: 50%;
        overflow: hidden;
    }
    .avatar img {
        width: 100%;
        height: 100%;
    }

    .score {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 75px);
        background: var(--pr-color);
        color: #fff;
        padding: 7px;
        border-radius: 3px;
    }
`