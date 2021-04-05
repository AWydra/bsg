import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[900],
    color: 'white',
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Typography variant="body2">React Video Platform</Typography>
    </Box>
  );
};

export default Footer;
