import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      Default layout
      <Outlet />
    </>
  );
};

export default DefaultLayout;
