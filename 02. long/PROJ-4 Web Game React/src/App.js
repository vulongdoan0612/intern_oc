import { Routes, Route } from "react-router-dom"
import GameMenuPage from "./pages/GameMenuPage"
import GameDetailPage from "./pages/GameDetailPage"
import GameItem from './components/GameItem/GameItem';
import Header from './components/Header/Header';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { useEffect } from "react";
import {upU} from './components/UpToFirebase/UpToFirebase'

  
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

      <Routes>
        <Route path="/" element={<GameMenuPage />} />
        <Route path="/GameDetailPage" element={<GameDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/game/:gameId" element={<GameItem />} />
      </Routes>
    </div>
  );
}

export default App;
