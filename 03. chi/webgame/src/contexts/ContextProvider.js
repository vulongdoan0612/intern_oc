import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
