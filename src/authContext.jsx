// authContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const signIn = (userData) => {
    // Perform your authentication logic here
    // Set the session data if authentication is successful
    setSession(userData);
  };

  const signOut = () => {
    // Clear the session data when signing out
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
