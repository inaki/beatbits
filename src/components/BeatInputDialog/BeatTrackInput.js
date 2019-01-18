import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StepOn = styled.div`
    display: inline-block;
    margin: 5px;
    width: 25px;
    height: 25px;
    font-size: 0.50rem;
    padding-top: 6px;
    text-align: center;
    box-sizing: border-box;
    background: #C62828;
    color: white;
    text-overflow:ellipsis; 
`;

const StepOff = styled.div`
    display: inline-block;
    margin: 5px;
    width: 25px;
    height: 25px;
    font-size: 0.50rem;
    padding-top: 6px;
    text-align: center;
    background: #f6f6f6;
    color: #a8a8a8;
    box-sizing: border-box;
`;


class BeatTrackInput extends Component {

    handleStepClick = (step) => {
        this.props.clickStep(step, this.props.track);
    }
    
    renderSteps(steps) {
        return steps.map( (step, index) => {
            const stepElement = step === 1 
                ? <StepOn onClick={() => this.handleStepClick(index)} key={index} stepNumber={index + 1}>{index + 1}</StepOn> 
                : <StepOff onClick={() => this.handleStepClick(index)} key={index} >{index + 1}</StepOff>
            return stepElement;
        });
    }
    
    render() {
        const { steps } = this.props;
        return (
            <div>
                { this.renderSteps(steps) }
            </div>
        );
    }
}

BeatTrackInput.propTypes = {
    steps: PropTypes.array
}

export default BeatTrackInput;