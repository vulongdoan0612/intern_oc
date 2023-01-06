import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [credit, setCredit] = useState(100);
  const [dataCurrentUser, setDataCurrentUser] = useState(null);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <StateContext.Provider
      value={{
        showModal,
        handleShowModal,
        currentUser,
        setCurrentUser,
        credit,
        setCredit,
        dataCurrentUser,
        setDataCurrentUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
