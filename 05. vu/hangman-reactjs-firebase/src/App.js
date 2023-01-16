import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { getToken } from "./services/user";
import { useStateContext } from "./ContextProvider";
import { useEffect } from "react";
=======
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16

function App() {
  const { setUser } = useStateContext();
  const handleGetDataUser = async () => {
    const dataUser = await getToken();
    setUser(dataUser[0]);
  };
  useEffect(() => {
    handleGetDataUser();
  },[]);

  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
