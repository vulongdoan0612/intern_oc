import React from 'react'
import {SongInfoStyled} from './SongInfo-styled'

export default function SongInfo({currentSong}) {
    return (
        <SongInfoStyled>
            <div className="img-wrap">
                <img src={ currentSong ? currentSong.urlImage: null }/>
            </div>
            <div className="info">
                <div className="song-name">{ currentSong ? currentSong.title : null }</div>
                <div className="song-artist">{ currentSong ? currentSong.author : null }</div>
            </div>
        </SongInfoStyled>
    )
}

