import { Box, Stack } from "@mui/material";
import AddPostBtn from "~/components/buttons/add-btn";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        {}
        {/* <Feed /> */}
      </Stack>
      <AddPostBtn />
    </Box>
  );
};

export default DefaultLayout;