import React from 'react';
import { AuthContext } from '../../src/contexts/AuthContext';

const AuthDecorator = (Story) => (
  <AuthContext.Provider
    value={{
      user: null,
      signup: () => {},
      login: () => {},
      logout: () => {},
      loading: false,
      error: '',
      setError: () => {},
    }}
  >
    <Story />
  </AuthContext.Provider>
);

export default AuthDecorator;
