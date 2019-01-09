import React, { Component } from 'react';
import BeatTrack from '../BeatTrack';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const BeatTitle = styled.span`
    color: #666;
    padding-top: 5px;
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

const BeatRow = styled.div`
    width: 100%;
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
                    <Grid item xs={7}>
                        <BeatRow>
                            <BeatTrack steps={rythm['accent']} /> 
                        </BeatRow>
                        <BeatRow>
                            <BeatTrack steps={rythm['cymball']} />
                        </BeatRow>
                        <BeatRow>
                            <BeatTrack steps={rythm['open hat']} /> 
                        </BeatRow>
                        <BeatRow>
                            <BeatTrack steps={rythm['closed hat']} /> 
                        </BeatRow>
                        <BeatRow>
                            <BeatTrack steps={rythm['cowbell']} /> 
                        </BeatRow>
                        <BeatRow>
                            <BeatTrack steps={rythm['clap']} /> 
                        </BeatRow>
                        <BeatRow>
                            <BeatTrack steps={rythm['tom']} /> 
                        </BeatRow>
                        <BeatRow>
                            <BeatTrack steps={rythm['snare']} /> 
                        </BeatRow>
                        <BeatRow>
                            <BeatTrack steps={rythm['kick']} /> 
                        </BeatRow>
                    </Grid>
                    <Grid item xs={3}>
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
