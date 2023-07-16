import { Box } from "@mui/material";
import Feed from "~/components/feed";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box>
        <Sidebar />
        <Feed />
      </Box>
      {children}
    </>
  );
};

export default DefaultLayout;
