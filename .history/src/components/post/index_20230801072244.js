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
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import React from "react";

const Post = ({ post }, ref) => {
  const navigate = useNavigate();
  function handleClick(link) {
    navigate(link);
  }
  return (
    <Card sx={{ marginBottom: 2 }} ref={ref}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        }
        title={<h1 onClick={() => handleClick("/detail-page")}>Kienthuc</h1>}
        subheader="Jul 13, 2023"
      />
      <Typography variant="h5" color="text.secondary">
        {post.title}
      </Typography>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(data:image/*;base64,${post.image.data})`,
          backgroundSize: "cover",
          aspectRatio: 1 / 1,
        }}
      ></Box>
      <CardMedia
        component="img"
        height={300}
        image="https://source.unsplash.com/random"
        alt="asfsd"
        onClick={() => handleClick("/detail-page")}
      />
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
