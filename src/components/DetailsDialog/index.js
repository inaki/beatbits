import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { patternInput, postBeat } from '../../actions';
import uniqid from 'uniqid';

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  Typography,
  Grid,
  TextField,
  MenuItem
} from '@material-ui/core';


import { genres } from '../../utils/variables';

import { withStyles } from '@material-ui/core/styles';

import BeatPatternExpanded from '../BeatPatternExpanded';

const styles = theme => ({
  dialog: {},
  title: {
    marginLeft: '8px',
    margin: '20px'
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
    height: 56,
    width: 116
  }
});

class DetailsDialog extends React.Component {
  
  state = {
    edit: true,
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
    this.props.onClose(this.props.selectedValue);
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
      //console.log(inputPayload)
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
    const { classes, onClose, selectedValue, selectedBeat, beatsInput, patternInput, postBeat, ...other } = this.props;
    console.log(this.state)
    return (
      <Dialog
        maxWidth={'md'}
        fullWidth={true}
        className={classes.dialog} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle className={classes.title} id="simple-dialog-title">
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={6}>
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
                      : selectedBeat.title 
                    }
                </Grid>
                <Grid item xs={3}>
                  { this.state.edit
                    ? <Button onClick={this.handleEdit} variant="outlined" color="primary" className={classes.editButton}>
                        Save
                      </Button>
                    : <Button onClick={this.handleEdit} variant="outlined" color="primary" className={classes.editButton}>
                        Edit
                      </Button>  
                  }
                </Grid>
              <Grid item xs={2}/>
            </Grid>
          </DialogTitle>

          <DialogContent>
            <Grid container>
              <Grid item xs={1}>
                  <div style={{width: '100%', height: '400px', border: '1px solid pink'}}></div>
              </Grid>
              <Grid item xs={8}>
                  <BeatPatternExpanded edit={this.state.edit} selectedBeat={selectedBeat}/>
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
                        <span style={{display: 'block', color: 'black', fontWeight: 'bold', fontSize: 18}}>description</span>
                        {selectedBeat.description}
                      </Typography>
                  }
              </Grid>
              <Grid item xs={3}>
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
      beatsInput: state.beatPatternInput
  }
}

export default connect(mapStateToProps, {
  patternInput,
  postBeat
})(withStyles(styles)(DetailsDialog));