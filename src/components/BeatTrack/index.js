import React, { Component, Fragment } from 'react';

class BeatTrack extends Component {
    
    renderSteps(steps) {
        return steps.map( (step, index) => {
            const stepElement = step === 1 ? <span key={index} style={{color: 'red'}}>{index + 1}</span> : <span key={index} style={{color: 'gray'}}>{index + 1}</span>
            return stepElement;
        });
    }
    
    render() {
        const { steps } = this.props;
        return (
            <Fragment>
                { this.renderSteps(steps) }
            </Fragment>
        );
    }
}

export default BeatTrack;