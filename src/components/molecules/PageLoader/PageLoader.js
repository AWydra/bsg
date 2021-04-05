import React from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  loader: {
    width: '100%',
    height: 'calc(100vh - 96px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PageLoader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loader}>
      <CircularProgress disableShrink size={50} />
    </Box>
  );
};

export default PageLoader;
