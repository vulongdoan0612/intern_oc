import React, { createContext, useContext, useEffect, useState } from "react";
import { getToken } from "./services/user";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

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
  
  return (
    <StateContext.Provider
      value={{
        setUser,
        user,
        highScore,
        setHighScore,
        score,
        setScore,
        setMoney,
        money,
        token,
        setToken,
        allUser,
        setAllUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
