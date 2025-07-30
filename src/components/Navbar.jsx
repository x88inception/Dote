import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap: 20 }}>

        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 200, height: 100, marginRight: 10 }}
          />
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Tech Hub
          </Typography>
        </Box>

        <Box>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/posts" color="inherit">Posts</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

