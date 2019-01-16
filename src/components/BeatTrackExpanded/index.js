import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StepOn = styled.span`
    display: inline-block;
    margin: 5px 5px;
    width: 25px;
    height: 25px;
    font-size: 0.90rem;
    padding-top: 6px;
    text-align: center;
    box-sizing: border-box;
    background: ${ props => props.stepNumber < 4 
        ? "#C62828" 
        : props.stepNumber < 9 
            ? "#E53935" 
            : props.stepNumber < 13 ? "#EF5350" : "#EF9A9A"
        };
    color: white;
    text-overflow:ellipsis; 
`;

const StepOff = styled.span`
    display: inline-block;
    margin: 5px 5px;
    width: 25px;
    height: 25px;
    font-size: 0.90rem;
    padding-top: 6px;
    text-align: center;
    background: #f6f6f6;
    color: #a8a8a8;
    box-sizing: border-box;
`;


class BeatTrack extends Component {
    
    renderSteps(steps) {
        return steps.map( (step, index) => {
            const stepElement = step === 1 
                ? <StepOn key={index} stepNumber={index + 1}>{index + 1}</StepOn> 
                : <StepOff key={index} >{index + 1}</StepOff>
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

BeatTrack.propTypes = {
    steps: PropTypes.array
}

export default BeatTrack;