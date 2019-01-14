import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import BeatTrack from '../BeatTrack';

const styles = theme => ({
    trackTitle: {
        color: '#666',
        paddingTop: '5px',
        textAlign: 'left',
        fontSize: '0.8rem'
    },
    beatRow: {
        width: '100%',
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between'
    }
})

class BeatPattern extends Component {
    render() {
        const { beats, classes } = this.props;
        
        return (
            <div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Accent : </span>
                    <BeatTrack steps={beats['accent']} /> 
                </div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Cymball : </span>
                    <BeatTrack steps={beats['cymball']} />
                </div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Open Hat : </span>
                    <BeatTrack steps={beats['open hat']} /> 
                </div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Close Hat : </span>
                    <BeatTrack steps={beats['closed hat']} /> 
                </div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Cowbell : </span>
                    <BeatTrack steps={beats['cowbell']} /> 
                </div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Clap : </span>
                    <BeatTrack steps={beats['clap']} /> 
                </div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Tom : </span>
                    <BeatTrack steps={beats['tom']} /> 
                </div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Snare: </span>
                    <BeatTrack steps={beats['snare']} /> 
                </div>
                <div className={classes.beatRow}>
                    <span className={classes.trackTitle}>Kick: </span>
                    <BeatTrack steps={beats['kick']} /> 
                </div>
            </div>
        )
    }
}

BeatPattern.propTypes = {
    beats: PropTypes.object
}

export default withStyles(styles)(BeatPattern);
