import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [users, setUser] = useState([]);
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<Home ></Home>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
