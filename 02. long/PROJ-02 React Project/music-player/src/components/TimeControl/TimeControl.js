import React from 'react'
import {TimeControlStyled} from "./TimeControl-style"

export default function TimeControl({ 
    currentTime, 
    timelineRef, 
    prevSong, 
    playOrPause, 
    changeCurrentTime, 
    pause, 
    nextSong, 
    currentSong, 
    playheadRef
}) 

{
    return (
        <TimeControlStyled>
            <div className="controls">
                {
                    prevSong && <button onClick={prevSong} className="prev prev-next current-btn"><i className="fas fa-backward"></i></button>
                }

                <button onClick={playOrPause} className="play current-btn">
                    {
                        (pause.p) ? <i className="fas fa-play"></i>
                            : <i className="fas fa-pause"></i>
                    }
                </button>
                {
                    nextSong && <button onClick={nextSong} className="next prev-next current-btn"><i className="fas fa-forward"></i></button>
                }
            </div>

            <div className="time">
                <div className="current-time">{currentTime}</div>
                <div ref={timelineRef} id="timeline" onClick={changeCurrentTime}  >
                    <div ref={playheadRef} id="playhead"></div>
                    <div  className="hover-playhead" data-content="0:00"></div>
                </div>
                {
                    currentSong && currentSong.duration && <div className="end-time">{currentSong ? currentSong.duration : 0}</div>
                }
            </div>
        </TimeControlStyled>
    )
}




