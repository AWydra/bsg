import React from 'react';
import { Box } from '@material-ui/core';
import LoginForm from 'components/organisms/LoginForm/LoginForm';

const Login = () => (
  <Box height="100%" display="flex" justifyContent="center" alignItems="center" px={2}>
    <LoginForm />
  </Box>
);

export default Login;
