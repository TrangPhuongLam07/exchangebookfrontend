import { Avatar, Box, Card, CardHeader, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
const Feed = () => {
  return (
    <Box bgcolor="beige" flex={4} p={2}>
      <Card>
        <CardHeader
          avatar={<Avatar>R</Avatar>}
          action={
            <IconButton>
              <MoreVert></MoreVert>
            </IconButton>
          }
        />
      </Card>
    </Box>
  );
};

export default Feed;
