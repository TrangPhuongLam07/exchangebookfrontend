import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { authService } from "~/services";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const value = { auth, setAuth };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within a AuthProvider");
  return context;
};
