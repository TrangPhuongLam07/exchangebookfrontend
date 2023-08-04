import { Box, Stack } from "@mui/material";
import Topbar from "~/components/common/topbar";
import Sidebar from "~/components/commn/sidebar";
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
      >
        <Sidebar />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
