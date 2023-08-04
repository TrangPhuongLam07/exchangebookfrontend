import { Box, Stack } from "@mui/material";
import AddPostBtn from "~/components/buttons/add-btn";
import Header from "~/components/header";
import Sidebar from "~/components/common/sidebar";

const ManagementLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Box flex={4}>{children}</Box>
      </Stack>
      <AddPostBtn />
    </Box>
  );
};

export default ManagementLayout;
