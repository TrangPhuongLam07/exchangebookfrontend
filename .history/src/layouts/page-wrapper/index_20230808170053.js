import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "~/contexts/auth";

const PageWrapper = ({ children, state, role = undefined }) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth);
  if (role === undefined || role === auth.role) return <>{children}</>;
  if (!auth)
    return (
      <Navigate to={"/sign-in"} state={{ from: location }} replace={true} />
    );
  if (role !== auth.role)
    return (
      <Navigate to={"/error/403"} state={{ from: location }} replace={true} />
    );

  // if (!role) {
  //   return <>{children}</>;
  // }
  // if (!auth)
  //   return (
  //     <Navigate to={"/sign-in"} state={{ from: location }} replace={true} />
  //   );
  // if (auth.role !== role)
  //   return (
  //     <Navigate to={"/error/403"} state={{ from: location }} replace={true} />
  //   );
};

export default PageWrapper;
