// @ts-nocheck
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    '&:before': {
      display: 'block',
      content: "''",
      width: '100%',
      paddingTop: ({ w, h }) => `${(h / w) * 100}%`,
    },
  },
  child: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
  },
});

const AspectRatio = ({ w, h, children, className, ...props }) => {
  const classes = useStyles({ w, h });

  return (
    <Box className={`${classes.root} ${className}`} {...props}>
      {cloneElement(children, { className: `${classes.child} ${children.props.className}` })}
    </Box>
  );
};

AspectRatio.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

AspectRatio.defaultProps = {
  className: '',
};

export default AspectRatio;
