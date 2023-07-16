import { Box } from "@mui/material";
import Post from "../post";

const Feed = () => {
  return (
    <Box bgcolor="beige" flex={2} p={2}>
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
