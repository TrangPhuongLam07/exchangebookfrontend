import { Box, Stack } from "@mui/material";
import AddPostBtn from "~/components/buttons/add-btn";
import Feed from "~/components/feed";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        {children}
        {/* <Feed /> */}
      </Stack>
      <AddPostBtn />
    </Box>
  );
};

export default DefaultLayout;
