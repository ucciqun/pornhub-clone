import React, { createContext, useState, useEffect } from "react";
import app from "./firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
