import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import BeatPattern from '../BeatPattern';

const styles = {
  dialog: {
 
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
    console.log(selectedBeat)
    return (
      <Dialog
        maxWidth={'md'}
        fullWidth={true}
        className={classes.dialog} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {selectedBeat.title}
        </Typography>
        <Typography component="p">
          {selectedBeat.description}
        </Typography>
        <Typography component="p">
          bpm : {selectedBeat.bpm}
        </Typography>
        <BeatPattern rythm={selectedBeat.rythm}/>
        </div>
      </Dialog>
    );
  }
}

DetailsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(DetailsDialog);
