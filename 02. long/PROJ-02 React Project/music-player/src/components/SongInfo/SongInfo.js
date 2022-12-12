import React from 'react'
import {SongInfoStyled} from './SongInfo-styled'

export default function SongInfo({currentSong}) {
    return (
        <SongInfoStyled>
            <div className="img-wrap">
                <img src={ currentSong.img }/>
            </div>
            <div className="info">
                <div className="song-name">{ currentSong.name }</div>
                <div className="song-artist">{ currentSong.artist }</div>
            </div>
        </SongInfoStyled>
    )
}
