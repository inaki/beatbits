import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBeatInput } from '../../actions';

import {
    Grid
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import BeatTrackInput from './BeatTrackInput';
import { tracks } from '../../utils/variables';
import { generateBeats } from '../../utils/helpers';

const styles = {
    container: {
        minWidth: 620
    },
    trackName: {
        padding: '4px 2px',
        fontFamily: 'Arial',
        color: 'grey'
    },
    trackPattern: {}
}

class BeatPatternInput extends Component {
    state = {
        beats: {}
    }

    componentDidMount() {
        console.log(this.props)
        const newBeatsPatterns = generateBeats(tracks);
        if (this.props.existingBeats) {
            this.setState({...this.state.beats, ...this.props.existingBeats});
        } else {
            this.setState({beats: {...this.state.beats, ...newBeatsPatterns}});
        }
    }

    handleClickStep = (step, track) => {
        if (this.props.canEdit) {
            const newSteps = this.state.beats[track];
            newSteps[step] = newSteps[step] === 0 ? 1 : 0;
            this.setState({steps: {...this.state.beats, ...this.state.beats[track]}});
            this.props.getBeatInput({beats: this.state.beats});
        } else {
            return;
        }
    }

    render() {
        const { classes, showAbbr = true } = this.props;
        return (
            <Fragment>
                {
                    Object.keys(this.state.beats).map((beat, index) => {
                        return (
                            <Grid key={beat} container direction="row" align="left" className={classes.container}>
                                { showAbbr
                                    ? <Grid item xs={1} className={classes.trackName}>{tracks[index].abbr}</Grid>
                                    : null
                                }
                                <Grid item xs={11} className={classes.trackPattern}>
                                    <BeatTrackInput track={beat} clickStep={this.handleClickStep} steps={this.state.beats[beat]}/>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Fragment>
        )
    }
}

BeatPatternInput.propTypes = {
    classes: PropTypes.object,
    getBeatInput: PropTypes.func
}

export default connect(null, {
    getBeatInput
})(withStyles(styles)(BeatPatternInput));