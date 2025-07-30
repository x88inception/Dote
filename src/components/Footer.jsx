import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 2,
        textAlign: 'center',
        marginTop: 4,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Tech Hub. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
