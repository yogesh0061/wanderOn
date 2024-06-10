// src/SignupPage.js

import React, { useState } from 'react';
import { Avatar, Button,  TextField, Paper, Box,  Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signupApi } from '../slices/authApi';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string, email?: string, password?: string, confirmPassword?: string, form?:string}>({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors: { name?: string, email?: string, password?: string, confirmPassword?: string } = {};
    
    if (!name) tempErrors.name = "Name is required";
    if (!email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Email is invalid";
    if (!password) tempErrors.password = "Password is required";
    if (password != confirmPassword) tempErrors.confirmPassword = "Passwords do not match";

    setErrors((prev)=>{
      prev=tempErrors;
      return(prev)

    });
    return Object.keys(tempErrors).length === 0;
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors((prev)=>({}))
    if (!validate()) return;

    try {
      const data = await signupApi({ name, email, password });
      console.log(data);
      if (data === "User created successfully") {
        navigate("/");
      } else {
        setErrors({ ...errors, form: "Sign up failed. Please try again." });
      }
    } catch (error) {
      console.log(error);
      setErrors({ ...errors, form: "Sign up failed. Please try again." });
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{marginY : 5}}>
      <Paper elevation={3} sx={{ paddingY : 1 }}>
        <Box
          sx={{
            margin: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            {errors.name && (
                <Typography color="error" variant="body2">
                  {errors.name}
                </Typography>
              )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            {errors.email && (
                <Typography color="error" variant="body2">
                  {errors.email}
                </Typography>
              )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            {errors.password && (
                <Typography color="error" variant="body2">
                  {errors.password}
                </Typography>
              )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
                <Typography color="error" variant="body2">
                  {errors.confirmPassword}
                </Typography>
              )}
            {errors.form && (
                <Typography color="error" variant="body2">
                  {errors.form}
                </Typography>
              )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default SignupPage;
