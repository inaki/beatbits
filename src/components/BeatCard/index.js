import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  description: {
    color: '#666'
  }
};

function BeatCard(props) {
  const { classes, title, bpm, rythm, handleSelect } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.bpm} component="p">
          bpm : {bpm}
        </Typography>
        <br/>
        <BeatPattern rythm={rythm}/>
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
};

export default withStyles(styles)(BeatCard);