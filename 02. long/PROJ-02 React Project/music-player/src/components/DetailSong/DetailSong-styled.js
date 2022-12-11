import styled from "styled-components"

export const StyledDetailSong = styled.div`

    .song-banner {
        background: linear-gradient(rgba(62,223,238,0.62) 0,rgba(0,0,0,.5) 100%);
        margin: -20px -30px 30px -30px;
        padding: 30px;
        display: flex;
        align-items: end; 
    }

    .song-img {
        height: 160px;
        width: 160px;
        margin-right: 30px
    }
    .song-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .song-name {
        font-size: 40px;
        margin-bottom: 40px
    }
    .song-artist {
        font-size: 22px;
    }

    .lyrics {
    width: 30%;
    }

    .l-title {
        font-size: 21px;
        margin-bottom: 20px;
        color: #b3b3b3;
    }

    .l-text {
        font-size: 14px;
        line-height: 20px;
    }

  
`
