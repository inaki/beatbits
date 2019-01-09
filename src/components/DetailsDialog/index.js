import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import BeatPatternExpanded from '../BeatPatternExpanded';
import Grid from '@material-ui/core/Grid';

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
    console.log(selectedBeat)
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
            <h3>description</h3>
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
};

export default withStyles(styles)(DetailsDialog);
