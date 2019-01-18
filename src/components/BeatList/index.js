import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectBeat, fetchBeats, fetchUsers } from '../../actions';
import {Grid, Button} from '@material-ui/core';
import NewPatternDialog from '../NewPatternDialog';
import BeatCard from '../BeatCard';

class BeatList extends Component {

    state = {
        open: false,
        addingNewPatternOpen: false,
        beats: []
      };
    
    componentDidMount() {
        this.props.fetchBeats();
        this.props.fetchUsers();
    }
      
    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleAddingPatternClick = () => {
        this.setState({addingNewPatternOpen: true});
    };

    handleClose = value => {
        this.setState({ selectedValue: value, addingNewPatternOpen: false, open: false });
    };
    
    renderBeatList = (beats, users) => {
        return beats
            .filter( beat => {
                if (this.props.beatsSearch !== null) {
                    if (this.props.beatsSearch.type === 'select') {
                        if (this.props.beatsSearch.genre === 'All') {
                            return true;
                        } else {
                            return this.props.beatsSearch.genre.toLowerCase() === beat.genre.toLowerCase();
                        }
                    } else if (this.props.beatsSearch.type === 'input') {
                        return beat.title.toLowerCase().includes(this.props.beatsSearch.title);
                    }
                }
                return true
            })
            .map( beat => {
                return (
                    <Grid item
                        xs={12}
                        key={beat.id}
                        align="left">
                        <BeatCard
                            user={users.find(user => user.email === beat.email)}
                            handleSelect={() => {
                                this.props.selectBeat(beat);
                                this.handleClickOpen();
                            }}
                            {...beat}/>
                    </Grid>
                    );
            });   
    }
    render() {
        const { selectedPattern, beats, users, isSignedIn } = this.props;
        return (
            <div>
                { selectedPattern && 
                    <NewPatternDialog
                    selectedPattern={selectedPattern}
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
                }

                {  this.state.addingNewPatternOpen &&
                    <NewPatternDialog 
                    adding='true'
                    open={this.state.addingNewPatternOpen}
                    onClose={this.handleClose}/>
                }
                <Grid container direction="column" align="center">
                    { isSignedIn ? <Button onClick={this.handleAddingPatternClick}>add pattern</Button> : null }
                        { this.renderBeatList(beats, users)}
                </Grid>
            </div>
        );
    }
}

BeatList.propTypes = {
    selectedPattern: PropTypes.object,
    beats: PropTypes.array,
    beatsSearch: PropTypes.object,
    selectBeat: PropTypes.func,
    fetchBeats: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        beats: state.beats,
        isSignedIn: state.auth.isSignedIn,
        selectedPattern: state.selectedPattern,
        beatsSearch: state.beatsSearch,
        users: state.users
    };
}

export default connect(mapStateToProps, {
    selectBeat,
    fetchBeats,
    fetchUsers
})(BeatList);