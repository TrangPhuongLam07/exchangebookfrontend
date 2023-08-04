import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      Default layoyt
      <Outlet />
    </>
  );
};

export default DefaultLayout;
