import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 200, height: 100, marginRight: 10 }}
          />
          
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/posts" color="inherit">Posts</Button>
          <Button component={Link} to="/users" color="inherit">Users</Button>
          <Button component={Link} to="/learned" color="inherit">Learned</Button>
        </Box>

        <Box>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
          >
            Join Tech Hub
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
