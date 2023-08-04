import Topbar from "~/components/common/topbar";
import sizes from "~/config/sizes";
import { Box } from "@mui/material";

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
