import { Box } from "@mui/material";
import Post from "../post";

const Feed = ({ children }) => {
  return (
    <Box bgcolor="beige" flex={2} p={2}>
      {children}
    </Box>
  );
};

export default Feed;
