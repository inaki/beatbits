import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { patternInput, postPattern } from '../../actions'
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
        genre: '',
        validation: {
            idError: null,
            artistError: null,
            authorError: null,
            titleError: null,
            bpmError: null,
            beatsError: null,
            genreError: null,
            descriptionError: null
        }
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
            "author": window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName(),
            "title": this.state.title,
            "bpm": this.state.bpm,
            "beats": this.props.beatsInput.beats,
            "genre": this.state.genre,
            "description": this.state.description,
            "email": window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail()
        }
        if (inputPayload.title.length < 2) {
            this.setState({validation: {...this.state.validation, titleError: true}});
        } else if (inputPayload.genre.length < 1) {
            this.setState({validation: {...this.state.validation, genreError: true }});
        } else if (inputPayload.artist.length < 2) {
            this.setState({validation: {...this.state.validation, artistError: true}});
        } else if (inputPayload.bpm.length < 2) {
            this.setState({validation: {...this.state.validation, bpmError: true}});
        } else {
            this.props.postPattern(inputPayload);
            this.handleClose();
        }
    }

    handleInputs = (e) => {
        switch(e.target.name) {
            case 'title': 
                this.setState({title: e.target.value, validation: {...this.state.validation, titleError: null}});
                break;
            case 'artist': 
                this.setState({artist: e.target.value, validation: {...this.state.validation, artistError: null}});
                break;
            case 'description': 
                this.setState({description: e.target.value});
                break;
            case 'bpm': 
                this.setState({bpm: e.target.value, validation: {...this.state.validation, bpmError: null}});
                break;
            case 'genre': 
                this.setState({genre: e.target.value, validation: {...this.state.validation, genreError: null}});
                break;
            default:
                return;
        }
    }

    render() {
        const { classes, onClose, patternInput, postPattern, beatsInput, isSignedIn, ...other } = this.props;
        const { validation } = this.state;
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
                            error={validation.titleError}
                            helperText={ validation.titleError ? "enter a beat title" : null}
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
                            error={validation.genreError}
                            helperText={ validation.genreError ? "choose a genre" : null}
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
                            error={validation.artistError}
                            helperText={ validation.artistError ? "enter artist name" : null}
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
                            error={validation.bpmError}
                            helperText={ validation.bpmError ? "enter the bpm" : null}
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
  postPattern: PropTypes.func,
  beatsInput: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        beatsInput: state.beatPatternInput,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {
    patternInput,
    postPattern
})(withStyles(styles)(DetailsDialog));
 