import { Box } from "@mui/material";

const Feed = ({ children }) => {
  return (
    <Box bgcolor="beige" flex={2} p={2}>
      {children}
    </Box>
  );
};

export default Feed;
