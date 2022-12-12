import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import User from './pages/User'
import Upload from './pages/Upload'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import DetailSong from './components/DetailSong/DetailSong';
import LikedSongs from './pages/LikedSongs';

function App() {
  return (
    <div className='app'>
      <Header />
      <Sidebar /> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/liked-song" element={<LikedSongs />} />
          <Route path="/song/:songId" element={<DetailSong />} />
      </Routes>

    </div>
  );
}

export default App;