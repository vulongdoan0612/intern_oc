import styled from "styled-components"

export const GameItemStyled = styled.div`
    /* margin-top: 40px;    */
    display: flex;
    .name {
        font-size: 30px;
        text-align: lef;
        /* margin: 30px 0; */
    }

    .playground iframe {
        width: 100%;
        height: calc(100vh - 200px);
        margin: auto;
        display: block;
        border-radius: 5px;
    }

    .game-container {
        width: 70%;
    }
    
`