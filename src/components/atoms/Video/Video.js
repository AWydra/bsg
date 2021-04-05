import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  error: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    ...theme.typography.h5,
    textAlign: 'center',
    boxShadow: theme.shadows[4],
  },
}));

const Video = ({ speed, url, ...props }) => {
  const [error, setError] = useState(false);
  const classes = useStyles();

  const handleError = () => setError(true);

  return error ? (
    <p className={classes.error}>Unable to load video</p>
  ) : (
    <ReactPlayer
      width="100%"
      height="100%"
      controls
      playing
      playbackRate={speed}
      url={url}
      onError={handleError}
      {...props}
    />
  );
};

Video.propTypes = {
  speed: PropTypes.number.isRequired,
  url: PropTypes.string,
};

Video.defaultProps = {
  url: '/video',
};

export default Video;
