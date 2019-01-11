import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import BeatTrackInput from './BeatTrackInput';

const styles = () => {

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
        this.state.beats[track] = newSteps;
        this.setState({steps: {...this.state.beats, ...this.state.beats[track]}});
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                {
                    Object.keys(this.state.beats).map(beat => {
                        console.log(beat)
                        return (
                            <Grid key={beat} container direction="row" align="left">
                                <Grid item xs={1}>{beat}</Grid>
                                <Grid item xs={11}>
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

export default withStyles(styles)(BeatPatternInput);