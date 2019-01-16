import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { patternInput, updateBeat } from '../../actions';

import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Grid,
  TextField,
  MenuItem
} from '@material-ui/core';


import { genres, tracks } from '../../utils/variables';

import { withStyles } from '@material-ui/core/styles';

import BeatPatternExpanded from '../BeatPatternExpanded';
import BeatPatternInput from '../BeatInputDialog/BeatPatternInput';

const styles = theme => ({
  dialog: {},
  title: {
    fontSize: '2rem'
  },
  description: {
    margin: '20px 0'
  },
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
  textFieldDescription: {
    paddingRight: '40px'
  },
  editButton: {
    height: 40,
    marginTop: 7,
    width: 116
  },
  trackNamesWrapper: {
    height: 295,
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

class DetailsDialog extends React.Component {
  
  state = {
    edit: null,
    title: '',
    artist: '',
    description: '',
    beats: [],
    bpm: '',
    genre: ''
  }

  componentDidMount() {
    const { title, artist, description, beats, bpm, genre } = this.props.selectedBeat;
    this.setState({
      title,
      artist,
      description,
      beats,
      bpm,
      genre
    })
  }

  handleClose = () => {
    this.setState({edit: false});
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  handleSubmit = () => {
      const inputPayload = {
          "id": this.props.selectedBeat.id,
          "artist": this.state.artist,
          "author": "inaki",
          "title": this.state.title,
          "bpm": this.state.bpm,
          "beats": this.props.beatsInput.beats,
          "genre": this.state.genre,
          "description": this.state.description
      }
      this.props.updateBeat(inputPayload);
      this.handleClose();
  }

  handleEdit = () => {
    if (this.state.edit === null || this.state.edit === false) {
      this.setState({edit: true});
    } else {
      this.setState({edit: false});
    }
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
    const { classes, onClose, selectedValue, isSignedIn, selectedBeat, beatsInput, patternInput, updateBeat, ...other } = this.props;
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
                  { this.state.edit
                    ? <BeatPatternInput showAbbr={false} existingBeats={selectedBeat}/>
                    : <BeatPatternExpanded edit={this.state.edit} selectedBeat={selectedBeat}/>
                  }
              </Grid>
              <Grid item xs={3}>
                    { this.state.edit 
                      ? <TextField
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
                          {selectedBeat.title }
                        </Typography>
                    }

                    { this.state.edit 
                      ? <TextField
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
                      : <Typography className={classes.artist} component="p">
                        {`artist: ${selectedBeat.artist}`}
                        </Typography>
                    }

                    { this.state.edit
                      ? <TextField
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
                      : <Typography className={classes.genre} component="p">
                          {`genre: ${selectedBeat.genre}`}
                        </Typography> 
                    }

                    { this.state.edit
                      ? <TextField
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
                      : <Typography className={classes.bpm} component="p">
                          {`bpm: ${selectedBeat.bpm}`}
                        </Typography> 
                      
                    }

                    { this.state.edit
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
                      : <Typography className={classes.description} component="p">
                          <span style={{display: 'block', color: 'black', fontSize: 18, marginBottom: 15}}>description</span>
                          {selectedBeat.description}
                        </Typography>
                    }

                    { this.state.edit
                      ? <Button onClick={this.handleSubmit} color="primary" className={classes.editButton}>
                          Save
                        </Button>
                      : isSignedIn
                        ? <Button onClick={this.handleEdit} color="primary" className={classes.editButton}>
                          Edit
                        </Button>  
                        : null
                    }
              </Grid>
            </Grid>   
          </DialogContent>
      
        
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

const mapStateToProps = (state) => {
  return {
      beatsInput: state.beatPatternInput,
      isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {
  patternInput,
  updateBeat
})(withStyles(styles)(DetailsDialog));