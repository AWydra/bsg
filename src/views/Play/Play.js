// @ts-nocheck
import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import PlayerSection from 'components/organisms/PlayerSection/PlayerSection';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(7),
      paddingRight: theme.spacing(7),
    },
  },
}));

const Play = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xl">
      <PlayerSection />
    </Container>
  );
};

export default Play;
