import React, { createContext, useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { getToken } from "./services/user";
=======
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
<<<<<<< HEAD
  //Hàm này sẽ gọi user liên tục, nếu như gọi nhiều lần, nhiều nơi thì react app sẽ bị render nhiều lần
  const [user, setUser] = useState(null);

  const handleGetToken = async () => {
    const data = await getToken();
    setUser(data[0]);
  };
  useEffect(() => {
    handleGetToken();
  }, [user?.tokenLocal, user?.money]);
  const [allUser, setAllUser] = useState([]);
  const [highScore, setHighScore] = useState(user?.highScoreLocal || 0);
  const [score, setScore] = useState(0);
  const [money, setMoney] = useState(user?.money);
  const [token, setToken] = useState(user?.token);
=======
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [highScoreDb, setHighScoreDb] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  // console.log(user.money);
  // useEffect(() => {
  //   setMoney(user.money);
  // }, [user]);
  const [token, setToken] = useState(0);
  const [money, setMoney] = useState(user.money);
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
  return (
    <StateContext.Provider
      value={{
        setUser,
        user,
<<<<<<< HEAD
=======
        highScoreDb,
        setHighScoreDb,
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
        highScore,
        setHighScore,
        score,
        setScore,
<<<<<<< HEAD
=======
        users,
        setUsers,
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
        setMoney,
        money,
        token,
        setToken,
<<<<<<< HEAD
        allUser,
        setAllUser,
=======
>>>>>>> 63539c33123e4fa6d12e889f9478a4887432fd16
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
