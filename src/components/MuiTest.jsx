import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({post}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://picsum.photos/seed/${post.id}/300/200`}
          alt="."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}