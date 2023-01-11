import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');

  const login = (name, password) => {
    if (password === '123') {
      setIsLogin(true);
      setUsername(name);
      return;
    }

    alert('Invalid password');
  };

  const logout = () => {
    setIsLogin(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLogin, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
