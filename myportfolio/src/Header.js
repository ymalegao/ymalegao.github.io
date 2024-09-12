import React from 'react';
import { Typography, Box } from '@mui/material';

function Header() {
    return (
        <Box
      component="header"
      sx={{
        backgroundColor: '#00BFA5',
        color: 'black',
        textAlign: 'center',
        padding: '1em 0',
      }}
    >
      <Typography variant="h2" component="h1">
        Welcome to Yash's Portfolio
      </Typography>
    </Box>
  );


}

export default Header;