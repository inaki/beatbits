import React, { Component } from 'react';
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
        const { rythm, bpm, genre } = this.props.selectedBeat;
        
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
                                <BeatTrackExpanded steps={rythm['accent']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={rythm['cymball']} />
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={rythm['open hat']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={rythm['closed hat']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={rythm['cowbell']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={rythm['clap']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={rythm['tom']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={rythm['snare']} /> 
                            </BeatRow>
                            <BeatRow>
                                <BeatTrackExpanded steps={rythm['kick']} /> 
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

export default BeatPatternExpanded;
