import { FirebaseError } from 'firebase/app';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { Auth } from '@types';

import { auth } from '../services/firebase/config';

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({} as Auth.IAuthContext);

const useAuth = () => useContext(AuthContext);

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<Auth.IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signup = async (email: string, password: string) => {
    setLoading(true);
    try {
      const signUpResponse = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setError('');
      return signUpResponse;
    } catch (e: unknown) {
      setLoading(false);
      setError('Failed to sign up. Please try again');
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const loginResponse = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setError('');
      return loginResponse;
    } catch (e: unknown) {
      setLoading(false);
      if (e instanceof FirebaseError && e.code === 'auth/wrong-password') {
        setError('Wrong email and/or password');
      } else {
        setError('Failed to login. Please try again');
      }
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
    <AuthContext.Provider value={{ user, signup, login, logout, loading, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
