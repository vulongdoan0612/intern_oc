import styled from "styled-components"

export const TimeControlStyled = styled.div`

    width: calc(100% - 330px);

    #timeline{
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 5px;
        background: red;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 10px;;
        
    }
    #playhead{
        position: relative;
        z-index: 2;
        width: 0;
        height: 5px;
        border-radius: 5px;
        background: white;
    }

    .time {
        display: flex;
        align-items: center;
        
    }
    .controls {
        text-align: center;
        margin-bottom: 10px;
        
    }
    .controls button {
        margin: 0 15px;
        cursor: pointer;
        background: none;
        border: none;
    }

    .controls button i {
        font-size: 24px;
        color: #fff;
    }

  
`