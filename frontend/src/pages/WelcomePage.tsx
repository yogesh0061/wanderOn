// src/WelcomePage.js

import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { logout } from '../slices/authApi';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate()
  const name  = useSelector((state : RootState) => state.authReducer.name)

  const handleLogout = async()=>{
  
    try{
    const response = await logout();
    if(response === "cookie deleted"){
      navigate("/")

    }}
    catch(e){
      console.log(e);
    }

  }
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
        <Typography component="h1" variant="h3" sx={{marginY :5}}>
          Hi {name}! 
        </Typography>
        <Typography component="h1" variant="h4" >
          Welcome to wanderOn Assignment
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
}

export default WelcomePage;
