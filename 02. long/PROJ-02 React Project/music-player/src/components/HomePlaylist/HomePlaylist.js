import React from "react"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import "../../assets/css/Main.css"
import Audio from "../Audio/Audio"
import { HomePlaylistStyled } from "./HomePlaylist-styled"
import { SONG_LIST } from "../../mock/data"
import { Link } from "react-router-dom"
import SongInfo from "../SongInfo/SongInfo"
import TimeControl from "../TimeControl/TimeControl"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import NewSongs from "../NewSongs/NewSongs";



const musicList = SONG_LIST

const HomePlaylist = () => {
  const [index, setIndex] = useState(3)
  const [currentTime, setCurrentTime] = useState("0:00")
  const [listSong, setListSong] = useState([])
  const [listRandom, setListRandom] = useState([])
  const [pause, setPause] = useState({ p: true })
  const playerRef = useRef()
  const timelineRef = useRef()
  const playheadRef = useRef()

  useEffect(() => {
    // console.log(pause.p)
    if (!pause.p) {
      playerRef.current.play()
    } else {
      playerRef.current.pause()
    }
  }, [pause])

  useEffect(() => {
    setPause({ p: false })
  }, [index])

  useEffect(() => {
    setPause({ p: true })
  }, []);
  const changeCurrentTime = (e) => {
    const duration = playerRef.current.duration()
    const playheadWidth = timelineRef.current.offsetWidth
    const offsetWidht = timelineRef.current.offsetLeft
    const userClickWidht = e.clientX - offsetWidht
    const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth
    playheadRef.current.style.width = userClickWidhtInPercent + "%"
    playerRef.current.setCurrentTime(
      (duration * userClickWidhtInPercent) / 100
    )
  }

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60)
    let seconds = Math.floor(currentTime % 60)
    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60)
    const formatTime = minutes + ":" + seconds
    return formatTime
  };

  const timeUpdate = () => {
    const duration = playerRef.current.duration()
    const playPercent = 100 * (playerRef.current.currentTime() / duration)
    playheadRef.current.style.width = playPercent + "%"
    const currentTime = formatTime(parseInt(playerRef.current.currentTime()))
    setCurrentTime(currentTime)
  };

  const updatePlayer = () => {
    playerRef.current.load()
  };

  const nextSong = () => {
    setIndex((index + 1) % listSong.length)
    updatePlayer()
  }
  const prevSong = () => {
    updatePlayer()
    setIndex((index + listSong.length - 1) % listSong.length)
  };
  const playOrPause = () => {
    setPause({ p: !pause.p })
  };
  const clickAudio = (key) => {
    updatePlayer()
    setIndex(key)
  };
  const currentSong = listSong[index]

  useEffect(() => {
    async function getListData() {
      const querySnapshot = await getDocs(collection(db, "posts"))
      querySnapshot.forEach((doc) => {
        setListSong((song) => [...song, doc.data()])
      })
    }
    getListData();
  }, []);
  const getRandomObject = (array) => {
    return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  };

  useEffect(() => {
    const listData = getRandomObject(listSong)
    setListRandom(listData);

  }, [listSong])

  // xắp xếp thep thứ tự 
  const orderListSong = listSong
    orderListSong.sort(function(y, x){
      return x.timestamp - y.timestamp;
  })

  //giới hạn 5 bài hát
  const orderListSongCut = orderListSong.slice(0, 5);


  const changeVolume = (value) => {
    playerRef.current.volume = value / 100
    console.log(`Volume: ${playerRef.current.volume}`)
  }
  
  return (
    <>
      <div
        className="playerFooter"
        onTimeUpdate={timeUpdate}
        onEnded={nextSong}
      >
        <Audio
          ref={playerRef}
          currentSong={currentSong ? currentSong.urlMp3 : null}
        ></Audio>

        <SongInfo currentSong={currentSong} />

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
          changeVolume={changeVolume}
        />
      </div>

        <HomePlaylistStyled>
          <div className="play-list">
            <div className="title">Random Songs</div>
            {listRandom.length > 0
              ? listRandom.map((music, key = 0, index) => (
                  <div
                    key={key}
                    onClick={() => clickAudio(key)}
                    className="track"
                  >
                    <div className="track-img"><img src={music.urlImage} /></div>

                    <div className="track-discr">
                      <Link to={"/song/" + music.id}>
                        <div className="track-name">{music.title}</div>
                      </Link>
                      <div className="track-author">{music.author}</div>
                    </div>

                    <div className="track-duration">{music.duration}</div>

                    <div className="hover-play">Click to play</div>
                  </div>
                ))
              : null}
          </div>
        </HomePlaylistStyled>

        <NewSongs listSong={orderListSongCut ? orderListSongCut : []} clickAudio={clickAudio} />
    </>
  );
};
export default HomePlaylist
