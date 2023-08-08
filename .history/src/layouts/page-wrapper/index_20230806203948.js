import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "~/contexts/auth";

const PageWrapper = ({ children, state, role }) => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  if (!auth) return <Navigate to={"/401"} state={{ from: location }} replace />;

  if (auth.role !== role)
    return <Navigate to={"/403"} state={{ from: location }} replace />;
  return <>{children}</>;
};

export default PageWrapper;
