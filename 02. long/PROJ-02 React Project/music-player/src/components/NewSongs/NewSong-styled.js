import styled from "styled-components"

export const NewSongsStyled = styled.div`
    float: left;
    width: 40%;
    margin-top: 60px;
    padding-left: 20px;

    .title {
        margin-bottom: 40px;
        font-size: 21px;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        color: #b3b3b3;
        padding-bottom: 10px;
    }

    .track:hover {
        background: #2e2e2e;
        transition: ease-in 0.2s;
    }

    .track {
        border-radius: 5px;
        height: 120px;
        display: flex;
        margin-bottom: 20px;
        margin-left: 20px;
    }
    .track:hover a{
        text-decoration: underline;
    }

    .track-img img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .track-discr {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: calc(100% - 200px)
    }
    .track-discr a {
        color: #fff;
        text-decoration: none;
    }
    .track-name {
        font-size: 20px;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .track-author {
        color: #b3b3b3;
        font-size: 17px;
        padding-left: 10px;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .track-duration {
        color: #b3b3b3;
        padding-left: 14px;
        font-style: italic;
        font-size: 15px;
    }
    .track-img {
        height: 100%;
        width: 200px;
        border-radius: 5px;
        overflow: hidden;
        margin-right: 20px;
        position: relative;
    }
    .modal-img {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .modal-img:hover {
        background: rgba(5,0,0,0.6); 
        transition: ease-in 0.2s;
    }

    .hover-play {
        position: absolute;
        color: #fff;
        top:calc(50% - 35px);
        left:calc(50% - 35px);
        height: 70px;
        width: 70px;
        padding: 10px;
        border: 3px solid;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
    }
    .modal-img:hover .hover-play {
        opacity: 1;
        transition: ease-in 0.2s;
    }

`