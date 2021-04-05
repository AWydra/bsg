import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    marginTop: theme.spacing(1.5),
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
    textAlign: 'center',
    lineHeight: 1.5,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(22),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.pxToRem(24),
    },
  },
}));

const Subtitle = ({ children }) => {
  const classes = useStyles();
  return <Typography className={classes.subtitle}>{children}</Typography>;
};

Subtitle.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Subtitle;
