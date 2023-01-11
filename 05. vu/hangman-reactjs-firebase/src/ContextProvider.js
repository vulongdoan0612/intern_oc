import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [highScoreDb, setHighScoreDb] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
