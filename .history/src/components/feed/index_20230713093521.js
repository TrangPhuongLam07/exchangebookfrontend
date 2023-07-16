import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, MoreVert, Share } from "@mui/icons-material";
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
          component="img"
          height={194}
          image="https://source.unsplash.com/random"
          alt="asfsd"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            vitae vero ad soluta doloribus doloremque
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
