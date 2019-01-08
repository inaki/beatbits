import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeatCard from '../BeatCard';

class BeatList extends Component {
    render() {
        const { beats } = this.props;
        console.log(this.props)
        return (
            <div>
                { beats.map( beat => <BeatCard key={beat.id} {...beat}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        beats: state.beats
    };
}

export default connect(mapStateToProps)(BeatList);