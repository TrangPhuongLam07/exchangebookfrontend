import Topbar from "~/components/common/topbar";
import sizes from "~/config/size";
import Sidebar from "~/components/common/sidebar";
import { Box, Toolbar } from "@mui/material";
import colors from "~/config/color";

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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizes.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colors.mainBg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
