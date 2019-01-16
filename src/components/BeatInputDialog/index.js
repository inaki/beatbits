import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { patternInput, postBeat } from '../../actions'
import uniqid from 'uniqid';

import { genres } from '../../utils/variables';

import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Button,
    Grid,
    TextField,
    MenuItem
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import BeatPatternInput from './BeatPatternInput';

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
        padding: '0 0px 0 0'
    },  
    textFieldArtist: {
    padding: '0 20px 0 0'
    }
};

class DetailsDialog extends React.Component {

    state = {
        title: '',
        artist: '',
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
        const inputPayload = {
            "id": uniqid(),
            "artist": this.state.artist,
            "author": "inaki",
            "title": this.state.title,
            "bpm": this.state.bpm,
            "beats": this.props.beatsInput.beats,
            "genre": this.state.genre,
            "description": this.state.description
        }
        this.props.postBeat(inputPayload);
        this.handleClose();
    }

    handleInputs = (e) => {
        switch(e.target.name) {
            case 'title': 
                this.setState({title: e.target.value});
                break;
            case 'artist': 
                this.setState({artist: e.target.value});
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={9}>
                        <TextField
                            label='artist'
                            name='artist'
                            placeholder='artist'
                            fullWidth={true}
                            id='outlined-name'
                            className={classes.textFieldArtist}
                            value={this.state.artist}
                            type='text'
                            onChange={this.handleInputs}
                            margin='normal'
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
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
  selectedValue: PropTypes.string,
  patternInput: PropTypes.func,
  postBeat: PropTypes.func,
  beatsInput: PropTypes.object
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
 