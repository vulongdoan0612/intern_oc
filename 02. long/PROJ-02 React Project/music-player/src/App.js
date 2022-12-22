import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Upload from "./pages/UploadPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import DetailSong from "./components/DetailSong/DetailSong";
import LikedSongs from "./pages/LikedSongs";
import LoginPage from "./pages/LoginPage";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { useEffect } from "react";
function App() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/");
    }
  }, [user, loading]);
  return (
    <div className="app">
      <Header />
      <ToastContainer />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/liked-song" element={<LikedSongs />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/song/:songId" element={<DetailSong />} />
      </Routes>
    </div>
  );
}

export default App;
