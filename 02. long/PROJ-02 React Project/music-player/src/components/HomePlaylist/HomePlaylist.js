import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import '../../assets/css/Main.css';
import Audio from "../Audio/Audio";
import {HomePlaylistStyled} from './HomePlaylist-styled'
import {SONG_LIST} from '../../mock/data'
import {Link} from 'react-router-dom';
import SongInfo from "../SongInfo/SongInfo"
import TimeControl from "../TimeControl/TimeControl";

const musicList = SONG_LIST

const HomePlaylist = () => {
    const [index, setIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [pause, setPause] = useState({p: true});
    const playerRef = useRef();
    const timelineRef = useRef();
    const playheadRef = useRef();

    useEffect(() => {
        // console.log(pause.p)
        if (!pause.p) {
            playerRef.current.play();
        } else {
            playerRef.current.pause();
        }
    }, [pause])
    
    useEffect(() => {
        setPause({p:false})
    },[index])

    useEffect(() => {
        setPause({p:true})
    },[])
    
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
    
    const updatePlayer = () =>{
        playerRef.current.load();
    }

    const nextSong = () => { 
        setIndex((index + 1) % musicList.length)
        updatePlayer();
    };
     const prevSong = () => {
        updatePlayer();
        setIndex((index + musicList.length - 1) % musicList.length);
    };
    const playOrPause = () => {
        setPause({p:!pause.p})
    }
    const  clickAudio = (key) =>{
        updatePlayer();
        setIndex(key)
    }
    const currentSong = musicList[index];


    return (
        <>
            <div className="playerFooter" onTimeUpdate={timeUpdate} onEnded={nextSong} >

                <Audio ref={playerRef} currentSong={currentSong.audio} ></Audio>

                <SongInfo currentSong={currentSong}   />

                <TimeControl 
                    prevSong={prevSong} 
                    nextSong={nextSong} 
                    currentSong={currentSong}
                    changeCurrentTime={changeCurrentTime} 
                    currentTime={currentTime} 
                    pause={pause} 
                    playOrPause={playOrPause}  
                    playheadRef={playheadRef} 
                    timelineRef={timelineRef} 
                />
            </div>
            
            <HomePlaylistStyled>
                <div className="play-list" >
                <div className="title">New Songs</div>
                {musicList.map( (music, key=0, index) =>
                    
                        <div key={key}
                            onClick={()=>clickAudio(key)}
                            className="track"
                        >   
                        
                            <img className="track-img" src={music.img}/>
                            
                                <div className="track-discr" >
                                    <Link to={"/song/"+music.id}>
                                        <div className="track-name" >{music.name}</div>
                                    </Link>
                                    <div className="track-author" >{music.artist}</div>
                                </div>
                            
                            <div className="track-duration" >
                                {music.duration}
                            </div>

                            <div class="hover-play">
                                Click to play
                            </div>
                            
                        </div>
                    
                )}
                </div>
            </HomePlaylistStyled>
        </>
        )
}
export default HomePlaylist;
