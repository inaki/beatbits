import React from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  DialogTitle,
  Typography,
  Grid
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import BeatPatternExpanded from '../BeatPatternExpanded';

const styles = {
  dialog: {},
  title: {
    marginLeft: '-23px'
  },
  description: {
    marginBottom: 20
  }
};

class DetailsDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, selectedBeat, ...other } = this.props;
    return (
      <Dialog
        maxWidth={'md'}
        fullWidth={true}
        className={classes.dialog} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <Grid container>
          <Grid item xs={2}/>
          <Grid item xs={7}>
            <DialogTitle className={classes.title} id="simple-dialog-title">{selectedBeat.title}</DialogTitle>
          </Grid>
          <Grid item xs={3}/>
        </Grid>
      
        <BeatPatternExpanded selectedBeat={selectedBeat}/>

        <Grid container>
          <Grid item xs={2}/>
          <Grid item xs={7}>
          <Typography className={classes.description} component="p">
            <span style={{display: 'block', color: 'black', fontWeight: 'bold', fontSize: 18}}>description</span>
            {selectedBeat.description}
          </Typography>
          </Grid>
          <Grid item xs={3}/>
        </Grid>
     
        
      </Dialog>
    );
  }
}

DetailsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  selectedBeat: PropTypes.object
};

export default withStyles(styles)(DetailsDialog);
