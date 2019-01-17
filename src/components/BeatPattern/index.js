import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import BeatTrack from '../BeatTrack';

const styles = theme => ({
    trackTitle: {
        color: '#666',
        paddingTop: '5px',
        textAlign: 'left',
        fontSize: '0.8rem',
        fontFamily: 'Arial'
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
        if (beats) {
            return (
                <div>
                    { Object.keys(beats).map( beat => {
                        return(
                            <div key={beat} className={classes.beatRow}>
                                <span className={classes.trackTitle}>{beat} : </span>
                                <BeatTrack steps={beats[beat]} /> 
                            </div>
                        );
                    })}
                </div>
            )
        } else {
            return null;
        }
    }
}

BeatPattern.propTypes = {
    beats: PropTypes.object
}

export default withStyles(styles)(BeatPattern);
