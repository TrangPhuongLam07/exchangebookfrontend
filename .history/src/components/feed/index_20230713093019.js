import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
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
          title="aaa"
          subheader="sep 14, 2023"
        />
        <CardMedia
          component={img}
          height={194}
          image="https://source.unsplash.com/random"
          alt="asfsd"
        />
        <CardContent>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            vitae vero ad soluta doloribus doloremque aliquam exercitationem
            ipsam ea dicta atque minima corporis, repudiandae delectus at,
            numquam non ut impedit.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Feed;
