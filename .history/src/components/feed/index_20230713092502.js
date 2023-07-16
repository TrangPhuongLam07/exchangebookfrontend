import { Avatar, Box, Card, CardHeader } from "@mui/material";

const Feed = () => {
  return (
    <Box bgcolor="beige" flex={4} p={2}>
      <Card>
        <CardHeader>
          <Avatar />
        </CardHeader>
      </Card>
    </Box>
  );
};

export default Feed;
