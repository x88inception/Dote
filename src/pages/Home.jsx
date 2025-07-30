import { Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import coursesImg from '../assets/images/courses.png';
import projectImg from '../assets/images/project.png';
import communityImg from '../assets/images/community.png';

const cards = [
  {
    title: 'Courses',
    desc: 'Learn programming and tech skills...',
    img: coursesImg,
  },
  {
    title: 'Project',
    desc: 'Create real-world applications...',
    img: projectImg,
  },
  {
    title: 'Community',
    desc: 'Connect with other learners...',
    img: communityImg,
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Welcome To Tech Hub</Typography>
      <Typography variant="h6" gutterBottom>Your Gateway To Technology Learned</Typography>

      <Button onClick={() => navigate('/')} variant="contained" sx={{ margin: 2 }}>
        JOIN TECH HUB
      </Button>

      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '100%',
                  height: 200,
                  objectFit: 'contain',
                  marginBottom: 16,
                  borderRadius: 8,
                }}
              />
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2">{card.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
