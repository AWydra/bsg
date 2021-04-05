import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: 500,
    textAlign: 'center',
    lineHeight: 1.5,
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.pxToRem(34),
    },
  },
}));

const Title = ({ children }) => {
  const classes = useStyles();
  return <Typography className={classes.title}>{children}</Typography>;
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Title;
