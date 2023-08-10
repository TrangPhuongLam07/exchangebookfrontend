import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "~/hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { value: authStorage, setValue } = useLocalStorage("auth", false);

  const value = { authStorage, setValue };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within a AuthProvider");
  return context;
};
