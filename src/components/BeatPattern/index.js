import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        const { beats } = this.props;
        
        return (
            <div>
                <BeatRow>
                    <BeatTitle>Accent : </BeatTitle>
                    <BeatTrack steps={beats['accent']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Cymball : </BeatTitle>
                    <BeatTrack steps={beats['cymball']} />
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Open Hat : </BeatTitle>
                    <BeatTrack steps={beats['open hat']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Close Hat : </BeatTitle>
                    <BeatTrack steps={beats['closed hat']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Cowbell : </BeatTitle>
                    <BeatTrack steps={beats['cowbell']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Clap : </BeatTitle>
                    <BeatTrack steps={beats['clap']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Tom : </BeatTitle>
                    <BeatTrack steps={beats['tom']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Snare: </BeatTitle>
                    <BeatTrack steps={beats['snare']} /> 
                </BeatRow>
                <BeatRow>
                    <BeatTitle>Kick: </BeatTitle>
                    <BeatTrack steps={beats['kick']} /> 
                </BeatRow>
            </div>
        )
    }
}

BeatPattern.propTypes = {
    beats: PropTypes.object
}

export default BeatPattern;
