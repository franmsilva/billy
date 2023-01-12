import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { Auth } from '@types';

import { auth } from '../../firebase/config'; // refactor

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({} as Auth.IAuthContext);

const useAuth = () => useContext(AuthContext);

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<Auth.IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  useEffect(() => {
    // unsubsribe from listener when component unmounts
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, signup, login, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
