import '../assets/css/Main.css'

import TopAlbums from "../components/TopAlbums/TopAlbums"
import HomePlaylist from "../components/HomePlaylist/HomePlaylist"
// import NewSongs from "../components/NewSongs/NewSongs"


function Home() {
    return (
        <div className="constainer">
            <TopAlbums />
            <HomePlaylist />
            {/* <NewSongs /> */}
        </div>
    )
}

export default Home