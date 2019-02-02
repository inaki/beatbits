import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { patternInput, postPattern, updateBeat, deletePattern } from '../../actions';

import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  TextField,
  MenuItem
} from '@material-ui/core';

import { genres, tracks } from '../../utils/variables';
import { withStyles } from '@material-ui/core/styles';
import BeatPatternInput from '../BeatInputDialog/BeatPatternInput';
import { generateBeats } from '../../utils/helpers';

const styles = theme => ({
  dialog: {},
  deleteBtn: {color: 'red'},
  title: {
    fontSize: '2rem'
  },
  description: {},
  bpm: {
    color: '#666',
    margin: '20px 0'
  },
  artist: {
    color: '#666',
    margin: '20px 0'
  },
  textFieldTitle: {
    paddingRight: '20px'
  },
  textFieldBpm: {},  
  textFieldArtist: {},
  textFieldDescription: {},
  editButton: {
    height: 40,
    marginTop: 7,
    width: 116
  },
  trackNamesWrapper: {
    height: 403,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 9,
    marginLeft: 34
  },
  trackNameText: {
    fontFamily: 'Arial',
    color: 'gray'
  }
});

function clearValidation() {
    return {
        idError: null,
        artistError: null,
        authorError: null,
        titleError: null,
        bpmError: null,
        beatsError: null,
        genreError: null,
        descriptionError: null,
        patternError: null
    }
}

class DetailsDialog extends React.Component {
  
  state = {
    addingPattern: false,
    editingPattern: false,
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
        descriptionError: null,
        patternError: null
    }
  }

  componentDidMount() {
    if(this.props.adding) {
        this.setState({
            beats: generateBeats(tracks),
            addingPattern: this.props.adding ? true : false
        });
    } else if (this.props.selectedPattern !== undefined) {
        this.setState({
            "id": this.props.selectedPattern.id,
            "artist": this.props.selectedPattern.artist,
            "author": this.props.isSignedIn ? window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName() : null,
            "title": this.props.selectedPattern.title,
            "bpm": this.props.selectedPattern.bpm,
            "beats": this.props.beatsInput.beats,
            "genre": this.props.selectedPattern.genre,
            "description": this.props.selectedPattern.description,
            "email": this.props.selectedPattern.email
        });
    }
  }

  handleClose = () => {
    this.setState({addingPattern: false, editingPattern: false});
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
    } else if (inputPayload.artist.length < 2) {
        this.setState({validation: {...this.state.validation, artistError: true}});
    } else if (inputPayload.genre.length < 1) {
        this.setState({validation: {...this.state.validation, genreError: true }});
    } else if (inputPayload.bpm.length < 2) {
        this.setState({validation: {...this.state.validation, bpmError: true}});
    } else if (inputPayload.beats === undefined && this.state.addingPattern) {
        this.setState({validation: {...this.state.validation, patternError: true}});
    } else {
        if(this.props.selectedPattern) {
            const editPayload = {
                "id": this.props.selectedPattern.id,
                "artist": this.state.artist,
                "author": window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName(),
                "title": this.state.title,
                "bpm": this.state.bpm,
                "beats": {...this.props.beatsInput.beats, ...this.props.selectedPattern.beats},
                "genre": this.state.genre,
                "description": this.state.description,
                "email": this.props.selectedPattern.email
            }
            this.setState({validation: {...clearValidation()}});
            this.props.updateBeat(editPayload);
            this.handleClose();
        } else {
            this.setState({validation: {...clearValidation()}})
            this.props.postPattern(inputPayload);
            this.handleClose();
        }
    }
}

    handleDeleteClick = (id) => {
        this.props.deletePattern(id);
        this.handleClose();
    }

    handleEditClick = () => {
        if (this.props.selectedPattern) {
            // console.log(this.props.selectedPattern)
            this.setState({
                editingPattern: true,
                id: this.props.selectedPattern.id,
                artist: this.props.selectedPattern.artist,
                author: this.props.isSignedIn ? window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName() : null,
                title: this.props.selectedPattern.title,
                bpm: this.props.selectedPattern.bpm,
                beats: {...this.props.beatsInput.beats, ...this.props.selectedPattern.beats},
                genre: this.props.selectedPattern.genre,
                description: this.props.selectedPattern.description,
                email: this.props.selectedPattern.email
            });
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
    const { classes, patterns, updateBeat, onClose, deletePattern, selectedValue, isSignedIn, selectedPattern, beatsInput, patternInput, postPattern, ...other } = this.props;
    const { validation } = this.state;
    const googleEmail = isSignedIn ? window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail() : null;
    
    return (
      <Dialog
        maxWidth={'md'}
        fullWidth={true}
        className={classes.dialog} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
          <DialogContent>
            <Grid container>
              <Grid item xs={1}>
                  <div className={classes.trackNamesWrapper}>
                    { tracks.map( track => <div key={track.value} className={classes.trackNameText}>{track.abbr}</div>)}
                  </div>
              </Grid>
              <Grid item xs={8}>
                <span style={{borderTop: this.state.editingPattern ? '1px dashed #ccc' : '', borderBottom: this.state.editingPattern ? '1px dashed #ccc' : '', display: 'inline-block', maxWidth: 560}}> 
                    <BeatPatternInput 
                        canEdit={this.state.addingPattern || this.state.editingPattern ? true : false}
                        showAbbr={false}
                        existingBeats={!this.state.addingPattern || this.state.edit ? selectedPattern : null}/>
                    { this.state.validation.patternError ? <Typography>You must so enter some beat patterns...</Typography> : null }
                </span>
              </Grid>
              <Grid item xs={3}>
                    { this.state.addingPattern || this.state.editingPattern
                        ? <TextField
                        error={validation.titleError}
                        helperText={ validation.titleError ? "enter a beat title" : null}
                        label='title'
                        name='title'
                        placeholder='title'
                        fullWidth={true}
                        id='outlined-name'
                        className={classes.textFieldTitle}
                        value={this.state.title}
                        type='text'
                        onChange={this.handleInputs}
                        margin='none'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    : <Typography className={classes.title}>
                        { selectedPattern ? selectedPattern.title : null }
                      </Typography>
                    }
            
                    { this.state.addingPattern || this.state.editingPattern
                    ?   <TextField
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
                    : <Typography className={classes.artist}>
                        artist: { selectedPattern ? selectedPattern.artist : null }
                      </Typography>
                    }

                    { this.state.addingPattern || this.state.editingPattern
                    ? <TextField
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
                    : <Typography className={classes.genre}>
                        genre: { selectedPattern ? selectedPattern.genre : null }
                      </Typography>
                    }

                    { this.state.addingPattern || this.state.editingPattern
                    ? <TextField
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
                    : <Typography className={classes.bpm}>
                        bpm: { selectedPattern ? selectedPattern.bpm : null }
                      </Typography>
                    }

                    { this.state.addingPattern || this.state.editingPattern
                    ? <TextField
                        label='description'
                        name='description'
                        multiline
                        placeholder='enter musical desciption'
                        fullWidth={true}
                        id='outlined-name'
                        className={classes.textFieldDescription}
                        value={this.state.description}
                        onChange={this.handleInputs}
                        margin='normal'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /> 
                    : <Typography className={classes.description}>
                        { selectedPattern ? selectedPattern.description : null }
                      </Typography>
                    }                
                   
              </Grid>
            </Grid>  
          </DialogContent>
      
          <DialogActions>
            <Grid container>
            { isSignedIn && selectedPattern !== null && selectedPattern.email === googleEmail && 
                    <Grid item xs={2}>
                        <Button onClick={() => this.handleDeleteClick(selectedPattern.id)} className={classes.deleteBtn}>Delete</Button>
                    </Grid>
            }
            </Grid>
            <Button onClick={this.handleClose} color="primary" className={classes.editButton}>
                { isSignedIn ? 'Cancel' : 'Close' }
            </Button>
            {
                isSignedIn && this.state.editingPattern &&
                <Button onClick={this.handleSubmit} color="primary" className={classes.editButton}>
                    Save
                </Button>
            }

            {
                isSignedIn && this.state.addingPattern &&
                <Button onClick={this.handleSubmit} color="primary" className={classes.editButton}>
                    Save
                </Button>
            }

            
            { isSignedIn && selectedPattern !== null && selectedPattern.email === googleEmail && !this.state.editingPattern &&
                <Button onClick={this.handleEditClick} color="primary" className={classes.editButton}>
                    Edit
                </Button>
            } 
          </DialogActions>
      </Dialog>
    );
  }
}

DetailsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  selectedPattern: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      beats: state.beats,
      patterns: state.beats,
      beatsInput: state.beatPatternInput,
      isSignedIn: state.auth.isSignedIn,
      selectedPattern: state.selectedPattern
  }
}

export default connect(mapStateToProps, {
  patternInput,
  postPattern,
  updateBeat,
  deletePattern
})(withStyles(styles)(DetailsDialog));