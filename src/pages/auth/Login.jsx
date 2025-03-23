import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import {login} from '../../api/apiService'

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    padding: theme.spacing(3),
    borderRadius: 8,
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    marginTop: theme.spacing(2),
  },
  tabContent: {
    paddingTop: theme.spacing(2),
  },
}));
const Login = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const nevigate= useNavigate();
  // JSON object for login and signup data
  const loginData = {
    email: '',
    password: ''
  };

  const signupData = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let formData = {};

    if (activeTab === 0) {
      // For login
      formData = {
        username: 'emilys',
        password: 'emilyspass'
      };
    } else {
      // For sign up
      formData = {
        email: signupData.email,
        password: signupData.password,
        confirmPassword: signupData.confirmPassword
      };
    }
    // try {
    //     const data = await login(formData);
    //     setResponseData(data); // Handle the response data
    //     console.log('Login successful:', data);
    //   } catch (error) {
    //     console.error('Login error:', error);
    //   }
    // // Log the form data in JSON format
    axios.post("https://dummyjson.com/auth/login", formData)
      .then(res => {
        console.log(res)
        localStorage.setItem("user", JSON.stringify(res.data))
        localStorage.setItem("token", JSON.stringify(res.data.accessToken))
        nevigate("/");
      })
      .catch(err => console.log(err))

  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <div className={classes.form}>
          <Typography variant="h4" align="center">
            {activeTab === 0 ? 'Login' : 'Sign Up'}
          </Typography>

          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>

          <form onSubmit={handleFormSubmit}>
            <Box className={classes.tabContent}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                required
              />
              {activeTab === 1 && (
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  margin="normal"
                  required
                />
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.button}
              >
                {activeTab === 0 ? 'Login' : 'Sign Up'}
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Login
