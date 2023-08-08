import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "~/contexts/auth";

const PageWrapper = ({ children, state, role }) => {
  const { auth } = useAuth();
  const location = useLocation();
  if (!role) return <>{children}</>;
  if (!auth)
    return <Navigate to={"/error/401"} state={{ from: location }} replace />;
  if (auth.role !== role)
    return <Navigate to={"/error/403"} state={{ from: location }} replace />;
};

export default PageWrapper;
