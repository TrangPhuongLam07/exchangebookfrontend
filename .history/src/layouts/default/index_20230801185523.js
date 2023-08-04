import Topbar from "~/components/common/topbar";
import size from "~/config/size";
import Sidebar from "~/components/common/sidebar";
import { Box } from "@mui/material";

const DefaultLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="aside"
        sx={{
          width: size.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
