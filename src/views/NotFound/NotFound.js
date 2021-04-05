import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  notFound: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 500,
  },
  button: {
    margin: theme.spacing(6, 'auto', 0),
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box mt={10} display="flex" flexDirection="column" justifyContent="center">
      <Typography className={classes.notFound} variant="h3">
        ERROR 404: Page not found
      </Typography>
      <Button
        className={classes.button}
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        Back to home
      </Button>
    </Box>
  );
};

export default NotFound;
