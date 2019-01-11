import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { genres } from '../../utils/variables';
import BeatPatternInput from './BeatPatternInput';

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

    state = {
        title: '',
        description: '',
        beats: [],
        bpm: '',
        genre: ''
    }

    handleClose = () => {
        this.props.onClose();
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    handleInputs = () => {}

    render() {
        const { classes, onClose, ...other } = this.props;
        return (
        <Dialog
            maxWidth={'md'}
            fullWidth={true}
            className={classes.dialog} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
            
                <DialogTitle className={classes.title} id="simple-dialog-title">title</DialogTitle>
            

            <Grid container>
                <Grid item xs={5}>
                    <TextField
                        label='title'
                        name='title'
                        placeholder='enter title of the beat'
                        fullWidth={true}
                        id="outlined-name"
                        className={classes.textField}
                        value={this.state.title}
                        onChange={this.handleInputs}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        label='bpm'
                        name='title'
                        placeholder='enter musical bpm'
                        fullWidth={true}
                        id="outlined-name"
                        className={classes.textField}
                        value={this.state.bpm}
                        onChange={this.handleInputs}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        label='select genre'
                        fullWidth={true}
                        id="outlined-select-genre"
                        select
                        name='select'
                        className={classes.textField}
                        value={this.state.genre}
                        onChange={this.handleGenres}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        margin="normal"
                        variant="outlined"
                        >
                        {genres.map(option => (
                            <MenuItem className={classes.menuItem} key={option.value} value={option.value}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.description} component="p">
                        <span style={{display: 'block', color: 'black', fontWeight: 'bold', fontSize: 18}}>description</span>
                        hols
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                BeatPatternInput
                </Grid>
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
 