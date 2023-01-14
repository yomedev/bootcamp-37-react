import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const login = (name, password) => {
    if (password === '123') {
      setIsLogin(true);
      setUsername(name);
      navigate('/posts', { replace: true });
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

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
