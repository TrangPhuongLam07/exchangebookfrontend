import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "~/contexts/auth";

const PageWrapper = ({ children, state, role }) => {
  const { auth } = useAuth();
  console.log(auth);
  const location = useLocation();
  console.log(role);
  if (!role) {
    return <>{children}</>;
  }
  if (!auth)
    return (
      <Navigate to={"/sign-in"} state={{ from: location }} replace={true} />
    );
  if (auth.role !== role)
    return (
      <Navigate to={"/error/403"} state={{ from: location }} replace={true} />
    );
};

export default PageWrapper;
