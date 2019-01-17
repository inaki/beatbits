import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Avatar
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BeatPattern from '../BeatPattern';

const styles = {
  card: {
    maxWidth: 600,
    margin: 10
  },
  avatar: {
    margin: 10,
    display: 'inline-block'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: '#666',
    textTransform: 'capitalize'
  },
  bpm: {
    color: '#666'
  },
  artist: {
    color: 'salmon',
    textTransform: 'capitalize'
  },
  description: {
    color: '#666'
  },
  userName: {
    display: 'inline-block',
    top: '-25px',
    position: 'relative'
  },
  infoWrapper: {
    textAlign: 'right'
  }
};

class BeatCard extends Component {
  render () {
    const { classes, title, bpm, genre, beats, artist, handleSelect, user } = this.props;
    
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              { user !== undefined 
                  ? <Fragment>
                      <Avatar alt="Remy Sharp" src={user.profileImageUrl} className={classes.avatar} />
                      <Typography component="h1" className={classes.userName} color="textSecondary" gutterBottom>
                        {user.name}
                      </Typography>
                    </Fragment>
                  : null }
                    
            </Grid>
            
            <Grid item xs={6} className={classes.infoWrapper}>
              <Typography component="h1" className={classes.title} color="textSecondary" gutterBottom>
                {title}
              </Typography>
              <Typography alt='artist' className={classes.artist} component="p">
                {artist}
              </Typography>
              <Typography className={classes.bpm} component="p">
                {`bpm: ${bpm} \u00A0\u00A0\u00A0\ genre: ${genre} `}
              </Typography>
            </Grid>
          </Grid>
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
}

BeatCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  bpm: PropTypes.string,
  beats: PropTypes.object,
  handleSelect: PropTypes.func 
};

// const mapStateToProps = state => {
//   return {
//     user: 
//   }
// }

export default withStyles(styles)(BeatCard);