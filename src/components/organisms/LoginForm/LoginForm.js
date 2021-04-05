/* eslint-disable no-alert */
import React from 'react';
import { Button, Card, CardContent, TextField, Typography, makeStyles } from '@material-ui/core';
import { logIn } from 'services';
import { useAuth } from 'context/AuthContext';
import history from 'utils/history';
import { formatAuthData } from 'utils/formatData';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  form: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: theme.spacing(4),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const { setUserData } = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    logIn()
      .then((res) => {
        setUserData(formatAuthData(res));
        history.replace('/');
      })
      .catch((err) => {
        const { status } = JSON.parse(err.message);
        window.alert(`ERROR ${status}`);
      });
  };

  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h1">
          Login
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Log in to our fancy site, where you can watch videos without any limits!
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="Login"
            variant="outlined"
            defaultValue="Anonymous"
            InputProps={{
              disabled: true,
            }}
          />
          <TextField
            className={classes.input}
            type="Password"
            label="Password"
            variant="outlined"
            defaultValue="Anonymous"
            InputProps={{
              disabled: true,
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
