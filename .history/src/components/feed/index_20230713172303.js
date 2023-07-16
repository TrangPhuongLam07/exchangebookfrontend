import { Box } from "@mui/material";
import Post from "~/post";

const Feed = () => {
  return (
    <Box bgcolor="beige" flex={4} p={2}>
      <Post />
    </Box>
  );
};

export default Feed;
