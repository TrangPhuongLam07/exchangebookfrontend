import { Box, Stack } from "@mui/material";
import Header from "~/components/header";
import Sidebar from "~/components/common/sidebar";
import AddPostBtn from "~/components/buttons/add-btn";

const DetailLayout = ({ children }) => {
  return (
    <Box>
      <Box flex={4}>{children}</Box>
    </Box>
  );
};

export default DetailLayout;
