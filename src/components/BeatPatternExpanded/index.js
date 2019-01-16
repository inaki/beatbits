import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import BeatTrackExpanded from '../BeatTrackExpanded';
import { tracks } from '../../utils/variables';

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

    renderBeatTracks() {
        const { beats } = this.props.selectedBeat;
        return tracks.map( beat => {
            
            return <BeatRow key={beat.value}>
                <BeatTrackExpanded steps={beats[beat.value]} /> 
            </BeatRow>;
        });
    }

    render() {
        
        return (
            <div>
                <BeatTrackExpandedsWrapper>
                    { this.renderBeatTracks() } 
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
