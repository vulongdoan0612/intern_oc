import React from "react";
import '../../assets/css/Main.css';
import {PlaylistStyled} from './Playlist-styled'


class Playlist extends React.Component {
    state = {
        index: 3,
        currentTime: '0:00',
        musicList: [
            {
                name: 'Blank Space',
                artist: 'Taylor Swift',
                img: 'https://upload.wikimedia.org/wikipedia/vi/7/7c/Taylor_Swift_-_Blank_Space_%28Official_Single_Cover%29.png',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '2:02'
            },
            {
                name: 'Girl',
                artist: 'SYML',
                img: 'https://www.songmeaningsandfacts.com/wp-content/uploads/2019/06/Roses-by-Chainsmokers-ft-Rozes.png',
                audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
                duration: '2:02'
            },
            {
                name: 'Habits (Stay Height)',
                artist: 'Tove Lo',
                img: 'https://www.songmeaningsandfacts.com/wp-content/uploads/2019/06/Roses-by-Chainsmokers-ft-Rozes.png',
                audio: 'https://www.bensound.com//bensound-music/the-day.mp3',
                duration: '2:02'
            },
            {
                name: 'Love Come Around',
                artist: 'Elina',
                img: 'https://www.songmeaningsandfacts.com/wp-content/uploads/2019/06/Roses-by-Chainsmokers-ft-Rozes.png',
                audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
                duration: '2:02'
            },
            {
                name: 'Roses',
                artist: 'The Chainsmokers',
                img: 'https://www.songmeaningsandfacts.com/wp-content/uploads/2019/06/Roses-by-Chainsmokers-ft-Rozes.png',
                audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
                duration: '2:02'
            },
            {
                name: 'Sunflower',
                artist: 'Post Malone ft Swae Lee',
                img: 'https://www.songmeaningsandfacts.com/wp-content/uploads/2019/06/Roses-by-Chainsmokers-ft-Rozes.png',
                audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
                duration: '2:02'
            },
            {
                name: 'The Scientist',
                artist: 'Coldplay',
                img: 'https://www.songmeaningsandfacts.com/wp-content/uploads/2019/06/Roses-by-Chainsmokers-ft-Rozes.png',
                audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
                duration: '2:02'
            },
        ],
        pause: false,
    };
  
  
    componentDidMount() {
        this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
        this.playerRef.addEventListener("ended", this.nextSong, false);
        this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
        this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
        this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
    }
  
    componentWillUnmount() {
        this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
        this.playerRef.removeEventListener("ended", this.nextSong);
        this.timelineRef.removeEventListener("click", this.changeCurrentTime);
        this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
        this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
    }
  
    changeCurrentTime = (e) => {
        const duration = this.playerRef.duration;
        
        const playheadWidth = this.timelineRef.offsetWidth;
        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
    
        const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
    
        this.playheadRef.style.width = userClickWidhtInPercent + "%";
        this.playerRef.currentTime = (duration * userClickWidhtInPercent)/100;
    }
  
    hoverTimeLine = (e) => {
        const duration = this.playerRef.duration;
        
        const playheadWidth = this.timelineRef.offsetWidth
        
        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
    
        if(userClickWidhtInPercent <= 100){
        this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
        }
        
        const time = (duration * userClickWidhtInPercent)/100;
        
        if( (time >=0) && (time <= duration)){
        this.hoverPlayheadRef.dataset.content = this.formatTime(time);
        }
    }
    
    resetTimeLine = () => {
        this.hoverPlayheadRef.style.width = 0;
    }
    
    timeUpdate = () => {
        const duration = this.playerRef.duration;
        const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
        const playPercent = 100 * (this.playerRef.currentTime / duration);
        this.playheadRef.style.width = playPercent + "%";
        const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));  
        this.setState({ 
        currentTime 
        });
    }
  
    formatTime = (currentTime) =>{
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
    
        seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
        
        const formatTime = minutes + ":" +  seconds
    
        return formatTime;
    }
  
    updatePlayer = () =>{
        const { musicList, index } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        this.playerRef.load();
    }
    
    nextSong = () => {
        const { musicList, index, pause } = this.state;
        
        this.setState({ 
            index: (index + 1) % musicList.length
        });
        this.updatePlayer();
        if(pause){
            this.playerRef.play();
        }
    };
  
    prevSong = () => {
        const { musicList, index, pause } = this.state;  
        
        this.setState({ 
            index: (index + musicList.length - 1) % musicList.length
        });
        this.updatePlayer();
        if(pause){
            this.playerRef.play();
        }
    };
     
  
    playOrPause = () =>{
        const { musicList, index, pause } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        if( !this.state.pause ){
            this.playerRef.play();
        }else{
            this.playerRef.pause();
        }
        this.setState({
            pause: !pause
        })
    }
    
    clickAudio = (key) =>{
        const { pause } = this.state;
        
        this.setState({
            index: key
        });
        
        this.updatePlayer();
        if(pause){
            this.playerRef.play();
        }
    }
  
    
    render() {
        const { musicList, index, currentTime, pause } = this.state;
        const currentSong = musicList[index];
        return (
            <PlaylistStyled>
                <div className="current-song">
                    <audio ref={ref => this.playerRef = ref}>
                        <source src={ currentSong.audio } type="audio/ogg"/>
                    </audio>
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
                            <button onClick={this.prevSong} className="prev prev-next current-btn"><i className="fas fa-backward"></i></button>
                            
                            <button onClick={this.playOrPause} className="play current-btn">
                                {
                                (!pause) ? <i className="fas fa-play"></i>
                                :<i class="fas fa-pause"></i>
                                }
                            </button>
                            <button onClick={this.nextSong} className="next prev-next current-btn"><i className="fas fa-forward"></i></button>
                        </div>
                        
                        <div className="time">
                            <div className="current-time">{ currentTime }</div>
                            <div ref={ref => this.timelineRef = ref} id="timeline">
                                <div ref={ref => this.playheadRef = ref} id="playhead"></div>
                                <div ref={ref => this.hoverPlayheadRef = ref} class="hover-playhead" data-content="0:00"></div>
                            </div>
                            <div className="end-time">{ currentSong.duration }</div>
                        </div>
                    </div>
                    
        
                    
                </div>

                <div className="play-list" >
                    {musicList.map( (music, key=0) =>
                        <div key={key} 
                            onClick={()=>this.clickAudio(key)}
                            className={"track " + 
                                (index === key && !pause ?'current-audio':'') + 
                                (index === key && pause ?'play-now':'')} 
                        >
                            
                            <img className="track-img" src={music.img}/>
                            <div className="track-discr" >
                                <div className="track-name" >{music.name}</div>
                                <div className="track-author" >{music.artist}</div>
                                <div className="track-duration" >
                                    {(index === key)
                                        ?currentTime
                                        :music.duration
                                    }
                                </div>
                            </div>
                            
                        </div>
                    )}
                </div>
            </PlaylistStyled>
        )
    }
}
  
export default Playlist