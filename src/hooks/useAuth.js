import { createContext, useContext, useEffect, useState } from 'react';
import {
  auth,
  init,
  login as authLogin,
  logout as authLogout,
} from '../lib/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    init((user) => {
      setUser(user);
    });

    auth.on('login', setUser);

    return () => {
      auth.off('login', setUser);
    };
  }, []);

  const login = () => {
    authLogin((user) => {
      setUser(user);
    });
  };

  const logout = () => {
    authLogout(() => {
      setUser(null);
    });
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
