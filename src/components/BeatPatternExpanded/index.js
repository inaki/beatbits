import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Grid, Typography} from '@material-ui/core';

import styled from 'styled-components';

import BeatTrackExpanded from '../BeatTrackExpanded';

const BeatTitle = styled.span`
    color: #666;
    padding-top: 10px;
    display: inline-block;
    min-height: 30px;
    text-align: left;
    font-size: 0.8rem;
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
