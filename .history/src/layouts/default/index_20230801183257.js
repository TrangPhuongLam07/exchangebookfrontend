import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import AddPostBtn from "~/components/buttons/add-btn";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

const DefaultLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
