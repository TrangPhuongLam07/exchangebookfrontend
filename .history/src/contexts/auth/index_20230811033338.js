import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "~/hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { localStorage, setLocalStorage } = useLocalStorage("auth", false);

  const value = { localStorage, setLocalStorage };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within a AuthProvider");
  return context;
};
