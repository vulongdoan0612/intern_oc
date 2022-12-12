import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { SONG_LIST } from "../../mock/data";
import SongInfo from "../SongInfo/SongInfo";
import TimeControl from "../TimeControl/TimeControl";
import Audio from "../Audio/Audio";
import {StyledDetailSong} from './DetailSong-styled'


const DetailSong = (props) => {
    const { songId } = useParams()
    const [song, setSong] = useState()
    const [currentTime, setCurrentTime] = useState('0:00');
    const [pause, setPause] = useState({p: true});
    const playheadRef = useRef();
    const playerRef = useRef();
    const timelineRef = useRef();

    // const [index, setIndex] = useState(0);

    useEffect(() => {

        if (!pause.p) {
            playerRef.current.play();
        } else {
            // playerRef.current.pause();
        }
    }, [pause])
    

    useEffect(() => {
        setPause({p:true})
    },[])


    const playOrPause = () => {
        setPause({p:!pause.p})
    }
    
    const changeCurrentTime = (e) => {
        const duration = playerRef.current.duration();
        const playheadWidth = timelineRef.current.offsetWidth;
        const offsetWidht = timelineRef.current.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
        playheadRef.current.style.width = userClickWidhtInPercent + "%";
        playerRef.current.setCurrentTime((duration * userClickWidhtInPercent)/100);
    }

    const formatTime = (currentTime) => {
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
        const formatTime = minutes + ":" +  seconds
        return formatTime;
    }

    const timeUpdate = () => {
        const duration = playerRef.current.duration();
        const playPercent = 100 * (playerRef.current.currentTime() / duration);
        playheadRef.current.style.width = playPercent + "%";
        const currentTime = formatTime(parseInt(playerRef.current.currentTime()));
        setCurrentTime(
            currentTime
        );
    }


    useEffect(()=>{
        console.log("songId", songId )
        const song = SONG_LIST.find((song)=> song.id.toString() === songId)
        if(song) {
            setSong(song)
        }
    },[songId])

    return (
        <div className="constainer">
            <StyledDetailSong>
                {song ? (
                    <>
                        <div className="song-banner">
                            <div className="song-img">
                                <img src={song.img}/>
                            </div>
                            <div className="song-desc">
                                <div className="song-name">{ song.name }</div>
                                <div className="song-artist">{ song.artist }</div>
                            </div>
                        </div> 
                        <div className="lyrics">
                            <div className="l-title">Lyrics:</div>
                            <div className="l-text">{song.lyrics}</div>
                        </div>

                        
                    </>
                ) : (
                    <>
                        <h1>No song found</h1>
                    </>
                )}
            </StyledDetailSong>

            {song && <div className="playerFooter" onTimeUpdate={timeUpdate} onEnded={null} >
                <Audio ref={playerRef} currentSong={song.audio} ></Audio>
                
                <SongInfo currentSong={song}  />
                
                <TimeControl 
                    // prevSong={prevSong} 
                    // nextSong={nextSong} 
                    currentSong={song}
                    changeCurrentTime={changeCurrentTime} 
                    currentTime={currentTime} 
                    pause={pause} 
                    playOrPause={playOrPause}  
                    playheadRef={playheadRef} 
                    timelineRef={timelineRef} 
                />

            </div>}
        </div>
    )
}

export default DetailSong