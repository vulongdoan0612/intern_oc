import { useState } from "react"
import {TimeControlStyled} from "./TimeControl-style"

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function TimeControl({ 
    currentTime, 
    timelineRef, 
    prevSong, 
    playOrPause, 
    changeCurrentTime, 
    pause, 
    nextSong, 
    currentSong, 
    playheadRef,
    changeVolume,
}) 
{

    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
        changeVolume(newValue)
        setValue(newValue);
    };
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

            

            <div className="container-action">
                
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

                <Box sx={{ width:180 }}>
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{ mb: 1 }}
                        alignItems="center"
                    >
                        <VolumeDown />
                            <Slider
                                aria-label="Volume"
                                value={value}
                                onChange={handleChange}
                            />
                        <VolumeUp />
                    </Stack>
                </Box>
            </div>
        </TimeControlStyled>
    )
}




