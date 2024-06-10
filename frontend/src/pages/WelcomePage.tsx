// src/WelcomePage.js

import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

function WelcomePage() {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3">
          Hi {"username"}! 
        </Typography>
        <Typography component="h1" variant="h4">
          Welcome to wanderOn Assignment
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => alert('Logout functionality goes here')}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
}

export default WelcomePage;
