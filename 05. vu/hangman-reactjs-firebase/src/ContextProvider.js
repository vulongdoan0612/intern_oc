import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
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
  return (
    <StateContext.Provider
      value={{
        setUser,
        user,
        highScoreDb,
        setHighScoreDb,
        highScore,
        setHighScore,
        score,
        setScore,
        users,
        setUsers,
        setMoney,
        money,
        token,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
