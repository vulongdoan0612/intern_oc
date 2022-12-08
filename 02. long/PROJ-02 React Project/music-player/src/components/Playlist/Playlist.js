import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import '../../assets/css/Main.css';
import Audio from "./Audio";
import {PlaylistStyled} from './Playlist-styled'

const musicList = [
            {
                name: 'Blank Space',
                artist: 'Taylor Swift',
                audio: 'music/songs/s1.mp3',
                img: 'music/thumbnails/s1.jpg',
                duration: '5:02'
            },
            {
                name: 'Girl',
                artist: 'SYML',
                audio: 'music/songs/s2.mp3',
                img: 'music/thumbnails/s2.jpg',
                duration: '2:02'
            },
            {
                name: 'Habits (Stay Height)',
                artist: 'Tove Lo',
                audio: 'music/songs/s3.mp3',
                img: 'music/thumbnails/s3.jpg',
                duration: '2:02'
            },
            {
                name: 'Love Come Around',
                artist: 'Elina',
                audio: 'music/songs/s4.mp3',
                img: 'music/thumbnails/s4.jpg',
                duration: '2:02'
            },
            {
                name: 'Roses',
                artist: 'The Chainsmokers',
                audio: 'music/songs/s5.mp3',
                img: 'music/thumbnails/s5.jpg',
                duration: '2:02'
            },
            {
                name: 'Sunflower',
                artist: 'Post Malone ft Swae Lee',
                audio: 'music/songs/s6.mp3',
                img: 'music/thumbnails/s6.jpg',
                duration: '2:02'
            },
            {
                name: 'The Scientist',
                artist: 'Coldplay',
                audio: 'music/songs/s7.mp3',
                img: 'music/thumbnails/s7.jpg',
                duration: '2:02'
            },
        ];

const Playlist = () => {
    const [index, setIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [pause, setPause] = useState({p: true});
    const playerRef = useRef();
    const timelineRef = useRef();
    const playheadRef = useRef();
    const hoverPlayheadRef = useRef();

    useEffect(() => {
        console.log(pause.p)
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

    const hoverTimeLine = (e) => {
        const duration = playerRef.current.duration();
        
        const playheadWidth = timelineRef.current.offsetWidth
        
        const offsetWidht = timelineRef.current.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
    
        if(userClickWidhtInPercent <= 100){
        hoverPlayheadRef.current.style.width = userClickWidhtInPercent + "%";
        }
        
        const time = (duration * userClickWidhtInPercent)/100;
        
        if( (time >=0) && (time <= duration)){
        hoverPlayheadRef.current.dataset.content = formatTime(time);
        }
    }


    const resetTimeLine = () => {
        hoverPlayheadRef.current.style.width = 0;
    }

    const timeUpdate = () => {
        const duration = playerRef.current.duration();
        const timelineWidth = timelineRef.current.offsetWidth - playheadRef.current.offsetWidth;
        const playPercent = 100 * (playerRef.current.currentTime() / duration);
        playheadRef.current.style.width = playPercent + "%";
        const currentTime = formatTime(parseInt(playerRef.current.currentTime()));
        setCurrentTime(
            currentTime
        );
    }
    
    const formatTime = (currentTime) => {
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
        const formatTime = minutes + ":" +  seconds
        return formatTime;
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
        const cur = !pause.p;
        console.log(cur)
        setPause({p:!pause.p})
    }
    const  clickAudio = (key) =>{
     updatePlayer();
     setIndex(key)
    }
    const currentSong = musicList[index];

    return (
            <PlaylistStyled>
                <div className="current-song" onTimeUpdate={timeUpdate} onEnded={nextSong} >
                    <Audio ref={playerRef} currentSong={currentSong.audio} ></Audio>
                    {/* <audio ref={ref => playerRef = ref}>
                         <source src={ currentSong.audio } type="audio/ogg"/>
                     </audio> */}
                    <div className="song-info">
                        <div className="img-wrap">
                            <img src={ currentSong.img }/>
                        </div>
                        <div className="info">
                            <div className="song-name">{ currentSong.name }</div>
                            <div className="song-artist">{ currentSong.artist }</div>
                        </div>
                    </div>

                    <div className="time-controls">
                        <div className="controls">
                            <button onClick={prevSong} className="prev prev-next current-btn"><i className="fas fa-backward"></i></button>
                            
                            <button onClick={playOrPause} className="play current-btn">
                                {
                                (pause.p) ? <i className="fas fa-play"></i>
                                :<i class="fas fa-pause"></i>
                                }
                            </button>
                            <button onClick={nextSong} className="next prev-next current-btn"><i className="fas fa-forward"></i></button>
                        </div>
                        
                        <div className="time">
                            <div className="current-time">{ currentTime }</div>
                            <div ref={timelineRef} id="timeline" onClick={changeCurrentTime} onMouseMove={hoverTimeLine} onMouseOut={resetTimeLine}>
                                <div ref={playheadRef} id="playhead"></div>
                                <div ref={hoverPlayheadRef} className="hover-playhead" data-content="0:00"></div>
                            </div>
                            <div className="end-time">{ currentSong.duration }</div>
                        </div>
                    </div>
                </div>

                <div className="play-list" >
                    {musicList.map( (music, key=0) =>
                        <div key={key}
                            onClick={()=>clickAudio(key)}
                            className={"track " +
                                (index === key && !pause ?'current-audio':'') +
                                (index === key && pause ?'play-now':'')}
                        >
                            
                            <img className="track-img" src={music.img}/>
                            <div className="track-discr" >
                                <div className="track-name" >{music.name}</div>
                                <div className="track-author" >{music.artist}</div>
                                <div className="track-duration" >
                                    {music.duration}
                                </div>
                            </div>
                            
                        </div>
                    )}
                </div>
            </PlaylistStyled>
        )
}
export default Playlist;