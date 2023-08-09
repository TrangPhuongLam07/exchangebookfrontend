import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "~/contexts/auth";
import {useEffect} from "react";
import {userService} from "~/services";

const PageWrapper = ({ children, state, role = undefined }) => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  console.log(role, auth.role);

/*  useEffect(() => {
    userService.getProfile().then((data) => {
      setAuth(data);
      console.log("auth "+auth)
    });
  }, []);*/
 /* userService.getProfile().then((data) => {
    setAuth(data);
  });*/
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
