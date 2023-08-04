import { Box, Stack } from "@mui/material";
import AddPostBtn from "~/components/buttons/add-btn";
import Header from "~/components/header";
import Sidebar from "~/components/common/sidebar";

const ManagementLayout = () => {
  return (
    <>
      {" "}
      <Outlet />
    </>
  );
};

export default ManagementLayout;
