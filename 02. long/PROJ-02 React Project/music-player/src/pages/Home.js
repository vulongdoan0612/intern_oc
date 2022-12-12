import '../assets/css/Main.css'

import TopAlbums from "../components/TopAlbums/TopAlbums"
import HomePlaylist from "../components/HomePlaylist/HomePlaylist"


function Home() {
    return (
        <div className="constainer">
            <TopAlbums />
            <HomePlaylist />
        </div>
    )
}

export default Home