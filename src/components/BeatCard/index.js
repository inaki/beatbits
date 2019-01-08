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
    maxWidth: 500,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function BeatCard(props) {
  const { classes, name, bpm, description, rythm } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
        <Typography component="p">
          bpm : {bpm}
        </Typography>
        <BeatPattern rythm={rythm}/>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

BeatCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeatCard);