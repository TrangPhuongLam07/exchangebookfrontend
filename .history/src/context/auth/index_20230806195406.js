import { createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within a AuthProvider");
  return context;
};
