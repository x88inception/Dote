import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const postsPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <div style={{ padding: '40px' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Latest Posts
      </Typography>

      <Grid container spacing={3}>
        {currentPosts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Paper elevation={4} sx={{ padding: 2 }}>
              <Typography variant="h6">{post.title.slice(0, 40)}...</Typography>
              <Typography variant="body2">{post.body.slice(0, 70)}...</Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate(`/posts/${post.id}`)}
                sx={{ marginTop: 2 }}
              >
                Read More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1} sx={{ mx: 1 }}>Back</Button>
        <Button disabled variant="contained">{page}</Button>
        <Button onClick={() => setPage(page + 1)} disabled={page === totalPages} sx={{ mx: 1 }}>Next</Button>
      </Grid>
    </div>
  );
}

export default Posts;
