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
  const [loading, setLoading] = useState<boolean>(false);

  const signup = async (email: string, password: string) => {
    setLoading(true);
    try {
      const signUpResponse = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return signUpResponse;
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const loginResponse = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return loginResponse;
    } catch (e) {
      setLoading(false);
      console.log(e);
      // create state for errors
    }
    setLoading(false);
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
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, signup, login, logout, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
