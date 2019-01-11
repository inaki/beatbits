import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import BeatTrackInput from './BeatTrackInput';
import { connect } from 'react-redux';
import { getBeatInput } from '../../actions';

const styles = {
    container: {
        minWidth: 620
    },
    trackName: {
        padding: 0
    },
    trackPattern: {
        marginLeft: '-10px'
    }
}

class BeatPatternInput extends Component {
    state = {
        beats: {
            'accent': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            'open hat': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            'closed hat': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            'cymbal': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            'cowbell': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            'clap': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            'tom': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            'snare': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            'kick': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    }

    handleClickStep = (step, track) => {
        const newSteps = this.state.beats[track];
        newSteps[step] = newSteps[step] === 0 ? 1 : 0;
        this.setState({steps: {...this.state.beats, ...this.state.beats[track]}});
        this.props.getBeatInput({beats: this.state.beats});
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                {
                    Object.keys(this.state.beats).map(beat => {
                        return (
                            <Grid key={beat} container direction="row" align="left" className={classes.container}>
                                <Grid item xs={2} className={classes.trackName}>{beat}</Grid>
                                <Grid item xs={10} className={classes.trackPattern}>
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

export default connect(null, {
    getBeatInput
})(withStyles(styles)(BeatPatternInput));