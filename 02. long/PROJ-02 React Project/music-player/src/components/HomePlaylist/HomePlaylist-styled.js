import styled from "styled-components"

export const HomePlaylistStyled = styled.div`

    margin-top: 60px;

    width: 60%;
    border-right: 1px solid #b3b3b3;
    padding-right: 20px;
    float: left;


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
        transition: ease-in 0.2s;
    }
    .track-img {
        width: 70px;
        height: 100%;
        overflow: hidden;
    }
    .track img {
        height: 100%;
        width: 100%;
        object-fit:cover;
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
        opacity: 0;
        cursor: pointer;
        transition: ease-in 0.2s;

    }
    .track:hover .hover-play {
        opacity: 1;
    }
    
  
`
