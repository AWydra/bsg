/* eslint-disable no-alert */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import AspectRatio from 'components/atoms/AspectRatio/AspectRatio';
import Video from 'components/atoms/Video/Video';
import SpeedControls from 'components/molecules/SpeedControls/SpeedControls';
import { getVideoData } from 'services';
import { useAuth } from 'context/AuthContext';
import { formatVideoData } from 'utils/formatData';
import history from 'utils/history';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  box: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.black,
  },
  video: {
    '& video': {
      boxShadow: theme.shadows[5],
      '&:focus': {
        outline: 'none',
      },
    },
  },
}));

const PlayerSection = () => {
  const [data, setData] = useState({});
  const [speed, setSpeed] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { userData, reset } = useAuth();
  const classes = useStyles();

  useEffect(() => {
    getVideoData(id, userData.token)
      .then((res) => {
        setData(formatVideoData(res));
        setLoading(false);
      })
      .catch((err) => {
        const { status } = JSON.parse(err.message);
        if (status === 401) {
          reset();
          history.replace('/login');
        } else {
          window.alert(`ERROR ${status}`);
        }
      });
  }, []);

  const handleSpeed = (speed) => {
    setSpeed(speed);
  };

  return (
    <Grid className={classes.root} component={Paper} elevation={5} container spacing={6}>
      <Grid item xs={12} xl={8}>
        <AspectRatio w={16} h={9} className={classes.video}>
          {loading ? <Box className={classes.box} /> : <Video speed={speed} url={data.url} />}
        </AspectRatio>
      </Grid>
      <Grid item xs={12} xl={4}>
        <Typography gutterBottom variant="h4" component="h2">
          {loading ? <Skeleton variant="text" /> : data.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {loading ? <Skeleton variant="rect" width="100%" height={150} /> : data.description}
        </Typography>
        <SpeedControls speed={speed} handleSpeed={handleSpeed} />
      </Grid>
    </Grid>
  );
};

export default PlayerSection;
