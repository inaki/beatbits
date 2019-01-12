import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeatTrackExpanded from '../BeatTrackExpanded';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const BeatTitle = styled.span`
    color: #666;
    padding-top: 10px;
    display: inline-block;
    min-height: 30px;
    text-align: left;
    font-size: 0.8rem;
    font-family: helvetica;
    margin: 1px 10px 8px 0;
    text-align: right;
`;

const BeatTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const BeatDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20;
    padding: 10px;
`;

const BeatTrackExpandedsWrapper = styled.div`
    min-width: 100%;
`;

const BeatRow = styled.div`
    min-width: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
`;

class BeatPatternExpanded extends Component {
    render() {
        const { beats, bpm, genre } = this.props.selectedBeat;
        
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        <BeatTitleWrapper>
                            <BeatTitle>Accent : </BeatTitle>
                            <BeatTitle>Cymball : </BeatTitle>
                            <BeatTitle>Open Hat : </BeatTitle>
                            <BeatTitle>Close Hat : </BeatTitle>
                            <BeatTitle>Cowbell : </BeatTitle>
                            <BeatTitle>Clap : </BeatTitle>
                            <BeatTitle>Tom : </BeatTitle>
                            <BeatTitle>Snare: </BeatTitle>
                            <BeatTitle>Kick: </BeatTitle>
                        </BeatTitleWrapper>
                    </Grid>
                    <Grid item xs={8}>
                        <BeatTrackExpandedsWrapper>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['accent']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['cymball']} />
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['open hat']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['closed hat']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['cowbell']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['clap']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['tom']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['snare']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={beats['kick']} /> 
                            </BeatRow>
                        </BeatTrackExpandedsWrapper>
                    </Grid>
                    <Grid item xs={2}>
                        <BeatDetailsWrapper>
                            <Typography component="p">
                                <span style={{color: 'gray'}}>genre : </span> 
                                <span style={{color: 'black', textTransform: 'capitalize'}}>{genre}</span>
                            </Typography>
                            <Typography component="p">
                                <span style={{color: 'gray'}}>bpm : </span>
                                <span style={{color: 'black', textTransform: 'capitalize'}}>{bpm}</span> 
                            </Typography>
                        </BeatDetailsWrapper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

BeatPatternExpanded.propTypes = {
    beats: PropTypes.array,
    bpm: PropTypes.string,
    genre: PropTypes.string
}

export default BeatPatternExpanded;
