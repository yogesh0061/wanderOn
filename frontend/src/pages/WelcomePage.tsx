// src/WelcomePage.js

import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

function WelcomePage() {
  const name  = useSelector((state : RootState) => state.authReducer.name)
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
          Hi {name}! 
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
