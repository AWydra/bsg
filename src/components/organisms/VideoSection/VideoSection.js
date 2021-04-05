import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import VideoItem from 'components/molecules/VideoItem/VideoItem';

const useStyles = makeStyles((theme) => ({
  list: {
    marginTop: theme.spacing(4),
    padding: 0,
    listStyle: 'none',
  },
}));

const VideoSection = ({ title, subtitle, items, loading }) => {
  const classes = useStyles();

  const grid = useMemo(
    () =>
      loading
        ? [...Array(15)].map((item, i) => (
            <Grid key={i} component="li" item xs={12} sm={6} lg={4} xl={3}>
              <VideoItem {...item} id={i} loading={loading} />
            </Grid>
          ))
        : items.map((item) => (
            <Grid key={item.id} component="li" item xs={12} sm={6} lg={4} xl={3}>
              <VideoItem {...item} loading={loading} />
            </Grid>
          )),
    [loading],
  );

  return (
    <>
      <HeadingBlock title={title} subtitle={subtitle} />
      <Grid className={classes.list} component="ul" container spacing={3}>
        {grid}
      </Grid>
    </>
  );
};

VideoSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default VideoSection;
