import { createContext, useContext, useEffect, useState } from 'react';
import { init, login as authLogin } from '../lib/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    init((user) => {
      setUser(user);
    });
  }, []);

  const login = () => {
    authLogin();
    console.log('login');
  };

  const contextValue = {
    user,
    login,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
