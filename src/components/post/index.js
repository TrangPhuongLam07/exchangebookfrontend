import {
  Avatar,
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
import {useNavigate} from "react-router-dom"
const Post = () => {
    const navigate = useNavigate();
    function handleClick(link) {
        navigate(link);
    }

    return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        }
        title={<h1 onClick={()=>handleClick("/detail-page")} >Kienthuc</h1>}
        subheader="Jul 13, 2023"
      />
        <CardMedia
            component="img"
            height={300}
            image="https://source.unsplash.com/random"
            alt="asfsd"
            onClick={() => handleClick("/detail-page")}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae
          vero ad soluta doloribus doloremque
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

export default Post;
