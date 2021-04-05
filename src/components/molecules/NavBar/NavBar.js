import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  makeStyles,
} from '@material-ui/core';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import history from 'utils/history';

const useStyles = makeStyles((theme) => ({
  bar: {
    marginBottom: theme.spacing(4),
    backgroundColor: 'white',
    color: 'black',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    ...theme.typography.h6,
    textTransform: 'unset',
  },
}));

const NavBar = () => {
  const { userData, reset } = useAuth();
  const classes = useStyles();

  const handleLogout = () => {
    reset();
    history.replace('/login');
  };

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h1">
          <Button component={Link} to="/" className={classes.button}>
            React Video platform
          </Button>
        </Typography>
        {userData.token && (
          <Tooltip title="Log Out">
            <IconButton color="primary" aria-label="logout" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
