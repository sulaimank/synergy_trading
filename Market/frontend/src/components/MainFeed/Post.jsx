import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
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
const Post = () => {
  return (
    <Card sx={{ margin: 5 }} style={{ backgroundColor: "#263042" }}>
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?cs=srgb&dl=pexels-anna-nekrashevich-6801647.jpg&fm=jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          style={{ color: "white" }}
          variant="body2"
          color="text.secondary"
        >
          <Typography gutterBottom variant="h5" component="div">
            Posting Title
          </Typography>
          <Typography variant="h6" color="text.secondary">
            John Doe
          </Typography>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            style={{ color: "white" }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share style={{ color: "white" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
