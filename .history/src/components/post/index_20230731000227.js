import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import React from "react";
const Post = ({ post }, ref) => {
  const StyledImg = styled("img")({
    position: "absolute",
    height: "full",
    width: "full",
    objectFit: "cover",
  });

  return (
    <Card sx={{ marginBottom: 2 }} ref={ref}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        }
        title="Kienthuc"
        subheader="Jul 13, 2023"
      />
      <Typography variant="h5" color="text.secondary">
        {post.title}
      </Typography>
      <Box
        sx={{
          width: 1000,
          paddingBottom: "2/3",
          position: "relative",
        }}
      >
        <StyledImg src={"data:image/*;base64," + post.image.data} />
      </Box>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={
              <Favorite
                sx={{
                  color: "rebeccapurple",
                }}
              />
            }
          />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default React.forwardRef(Post);
