import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { genres } from '../../utils/variables';
import BeatPatternInput from './BeatPatternInput';
import { connect } from 'react-redux';
import { patternInput, postBeat } from '../../actions'

const styles = {
  dialog: {},
  title: {
    
  },
  description: {
    marginBottom: 20
  },
  textFieldTitle: {
      padding: '0 20px 0 0'
  },
  textFieldBpm: {
      padding: '0 20px 0 0'
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

    handleSubmit = () => {
        this.props.postBeat({...this.state, ...this.props.beatsInput});
        this.handleClose();
    }

    handleInputs = (e) => {
        switch(e.target.name) {
            case 'title': 
                this.setState({title: e.target.value});
                break;
            case 'description': 
                this.setState({description: e.target.value});
                break;
            case 'bpm': 
                this.setState({bpm: e.target.value});
                break;
            case 'genre': 
                this.setState({genre: e.target.value});
                break;
            default:
                return;
        }
    }

    render() {
        const { classes, onClose, patternInput, postBeat, beatsInput, ...other } = this.props;
        return (
        <Dialog
            maxWidth={'sm'}
            fullWidth={true}
            className={classes.dialog} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
            
            <DialogTitle className={classes.title} id="simple-dialog-title">Add a Beat Pattern</DialogTitle>
            
            <DialogContent>

                <Grid container>
                    <Grid item xs={5}>
                        <TextField
                            label='title'
                            name='title'
                            placeholder='enter title of the beat'
                            fullWidth={true}
                            id="outlined-name"
                            className={classes.textFieldTitle}
                            value={this.state.title}
                            onChange={this.handleInputs}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            label='bpm'
                            name='bpm'
                            placeholder='bpm'
                            fullWidth={true}
                            id='outlined-name'
                            className={classes.textFieldBpm}
                            value={this.state.bpm}
                            type='number'
                            onChange={this.handleInputs}
                            margin='normal'
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            label='select genre'
                            fullWidth={true}
                            id='outlined-select-genre'
                            select
                            name='genre'
                            className={classes.textField}
                            value={this.state.genre}
                            onChange={this.handleInputs}
                            SelectProps={{
                                MenuProps: {
                                className: classes.menu,
                                },
                            }}
                            margin='normal'
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            >
                            {genres
                                .filter(option => option.value !== 'All')
                                .map(option => (
                                <MenuItem className={classes.menuItem} key={option.value} value={option.value}>
                                {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='description'
                            name='description'
                            multiline
                            placeholder='enter musical desciption'
                            fullWidth={true}
                            id='outlined-name'
                            className={classes.textField}
                            value={this.state.description}
                            onChange={this.handleInputs}
                            margin='normal'
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <BeatPatternInput />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={this.handleSubmit} color='primary'>
                    Save Pattern
                </Button>
            </DialogActions>

        
            
        </Dialog>
        );
    }
}

DetailsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        beatsInput: state.beatPatternInput
    }
}

export default connect(mapStateToProps, {
    patternInput,
    postBeat
})(withStyles(styles)(DetailsDialog));
 