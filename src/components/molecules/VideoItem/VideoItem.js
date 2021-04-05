// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActionArea, Typography, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import AspectRatio from 'components/atoms/AspectRatio/AspectRatio';
import noCover from 'assets/img/noCover.png';

const useStyles = makeStyles({
  title: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    '-webkit-line-clamp': 2,
  },
});

const VideoItem = ({ id, title, image, year, loading }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea disabled={loading} component={Link} to={`/play/${id}`}>
        <AspectRatio w={16} h={9}>
          {loading ? (
            <Skeleton variant="rect" width="100%" height="100%" />
          ) : (
            <img src={image || noCover} alt={`${title} cover`} />
          )}
        </AspectRatio>
        <CardContent>
          <Typography className={classes.title} variant="body1" component="h2">
            {loading ? <Skeleton variant="text" /> : title}
          </Typography>
          <Typography className={classes.title} variant="body2" component="p" color="textSecondary">
            {loading ? <Skeleton variant="rect" /> : year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

VideoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.bool.isRequired,
};

VideoItem.defaultProps = {
  title: '',
  image: '',
  year: 'Year unknown',
};

export default VideoItem;
