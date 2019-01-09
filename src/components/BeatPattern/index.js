import React, { Component } from 'react';
import BeatTrack from '../BeatTrack';
import styled from 'styled-components';

const BeatTitle = styled.span`
    color: #666;
    padding-top: 5px;
    text-align: left;
    font-size: 0.8rem;
    font-family: helvetica;
`;

const BeatRow = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
`;

class BeatPattern extends Component {
    render() {
        const { rythm } = this.props;
        
        return (
            <div>
                <BeatRow>
                    <BeatTitle>Accent : </BeatTitle>
                    <BeatTrack steps={rythm['accent']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Cymball : </BeatTitle>
                    <BeatTrack steps={rythm['cymball']} />
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Open Hat : </BeatTitle>
                    <BeatTrack steps={rythm['open hat']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Close Hat : </BeatTitle>
                    <BeatTrack steps={rythm['closed hat']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Cowbell : </BeatTitle>
                    <BeatTrack steps={rythm['cowbell']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Clap : </BeatTitle>
                    <BeatTrack steps={rythm['clap']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Tom : </BeatTitle>
                    <BeatTrack steps={rythm['tom']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Snare: </BeatTitle>
                    <BeatTrack steps={rythm['snare']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Kick: </BeatTitle>
                    <BeatTrack steps={rythm['kick']} /> 
                </BeatRow>
            </div>
        )
    }
}

export default BeatPattern;
