import styled from "styled-components"

export const HomePlaylistStyled = styled.div`

    margin-top: 60px;;

    width: 70%;
    border-right: 1px solid #fff;
    padding-right: 20px;


    .title {
        margin-bottom: 40px;
        font-size: 21px;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        color: #b3b3b3;
        padding-bottom: 10px;
    }
    .track  {
        height:  110px;
        display: flex;
        align-items: center;
        position: relative;
        padding: 20px;
        border-radius: 5px;
    }
    .track:hover {
        background: #2e2e2e;
    }
    .track img {
        height: 100%;
    }

    .track-discr {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
    }
    .track-discr > div {
        padding: 10px 0;
    }
    .track-discr a {
        color: #fff;
        text-decoration: none;
    }
    .track-name {
        color: #fff;
    }
    .track:hover a {
        text-decoration: underline
    }
    .track-author {
        font-size: 12px
    }

    .track-duration {
        position: absolute;
        right: 20px;
    }

    .hover-play {
        color: #b3b3b3;
        font-style: italic;
        font-size: 15px;
        position: absolute;
        left: 50%;
        display: none;
        cursor: pointer;
    }
    .track:hover .hover-play {
        display: block;
    }
    
  
`
