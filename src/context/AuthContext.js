// @ts-nocheck
import React, { createContext, useState, useContext } from 'react';
import generateAuthData, { initialData } from 'utils/generateAuthData';

const AuthContext = createContext();

const data = generateAuthData(JSON.parse(window.localStorage.getItem('auth')));

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [userData, setData] = useState(data);

  return <AuthContext.Provider value={{ userData, setData }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const { userData, setData } = useContext(AuthContext);

  const setUserData = (data) => {
    setData(data);
    window.localStorage.setItem('auth', JSON.stringify(data));
  };

  const reset = () => {
    setUserData(initialData);
    window.localStorage.removeItem('auth');
  };

  return { userData, setUserData, reset };
};

export { AuthProvider, useAuth };
