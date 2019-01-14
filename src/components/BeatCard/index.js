import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BeatPattern from '../BeatPattern';

const styles = {
  card: {
    maxWidth: 600,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: '#666'
  },
  bpm: {
    color: '#666'
  },
  artist: {
    color: '#666'
  },
  description: {
    color: '#666'
  }
};

function BeatCard(props) {
  const { classes, title, bpm, beats, artist, handleSelect } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.artist} component="p">
          artist: {artist}
        </Typography>
        <Typography className={classes.bpm} component="p">
          bpm : {bpm}
        </Typography>
        <br/>
        <BeatPattern beats={beats}/>
        <br/>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSelect}>Beat Details</Button>
      </CardActions>
    </Card>
  );
}

BeatCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  bpm: PropTypes.string,
  beats: PropTypes.object,
  handleSelect: PropTypes.func 
};

export default withStyles(styles)(BeatCard);