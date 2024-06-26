// src/LoginPage.js

import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { loginThunk } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme();

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginThunk({ email, password }))
    .unwrap()
    .then(() => {
      navigate("/Welcome");
    })
    .catch((e: any) => {
      // Assuming `e` contains the error message or status
      if (e.message === "Request failed with status code 401") {
        setErrorMessage('Incorrect email or password.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
      console.log(e);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ marginY: 5 }}>
        <Paper elevation={3} sx={{ paddingY: 1 }}>
          <Box
            sx={{
              margin: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
              >
                Sign In
              </Button>
              <Stack direction={"row"} spacing={1} justifyContent="flex-end">
                <Typography variant="body2" to={'/signup'} component={Link}>Don't have an account?
                <span style={{color:theme.palette.primary.dark}}>
                  {"  Register here"}
                </span>
                </Typography>
              </Stack>
              {
                errorMessage &&(
                  <Typography color="error" variant="body2">
                  {errorMessage}
                </Typography>

                )
              }
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
