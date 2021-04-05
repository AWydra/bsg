// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, InputLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  label: {
    margin: theme.spacing(4, 0, 1),
    color: theme.palette.text.primary,
  },
  button: {
    textTransform: 'unset',
  },
}));

const SpeedControls = ({ speed, handleSpeed }) => {
  const classes = useStyles();

  return (
    <>
      <InputLabel className={classes.label}>Speed:</InputLabel>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          variant={speed === 1 && 'contained'}
          className={classes.button}
          onClick={() => handleSpeed(1)}
        >
          1x
        </Button>
        <Button
          variant={speed === 1.5 && 'contained'}
          className={classes.button}
          onClick={() => handleSpeed(1.5)}
        >
          1.5x
        </Button>
        <Button
          variant={speed === 2 && 'contained'}
          className={classes.button}
          onClick={() => handleSpeed(2)}
        >
          2x
        </Button>
      </ButtonGroup>
    </>
  );
};

SpeedControls.propTypes = {
  speed: PropTypes.number.isRequired,
  handleSpeed: PropTypes.func.isRequired,
};

export default SpeedControls;
