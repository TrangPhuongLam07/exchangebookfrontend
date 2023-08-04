import { Box, Stack } from "@mui/material";
import AddPostBtn from "~/components/buttons/add-btn";
import Topbar from "~/components/common/topbar";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";
import sizes from "~/config/sizes";

const DefaultLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="aside"
        sx={{
          width: sizes.sidebar.width,
          flexShrink: 0,
        }}
      ></Box>
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
