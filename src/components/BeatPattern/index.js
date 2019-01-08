import React, { Component } from 'react';
import BeatTrack from '../BeatTrack';

class BeatPattern extends Component {
    render() {
        const { rythm } = this.props;
        
        return (
            <div>
                Accent : <BeatTrack steps={rythm['accent']} /> <br/>
                Cymball : <BeatTrack steps={rythm['cymball']} /> <br/>
                Open Hat : <BeatTrack steps={rythm['open hat']} /> <br/>
                Close Hat : <BeatTrack steps={rythm['closed hat']} /> <br/>
                Cowbell : <BeatTrack steps={rythm['cowbell']} /> <br/>
                Clap : <BeatTrack steps={rythm['clap']} /> <br/>
                Tom : <BeatTrack steps={rythm['tom']} /> <br/>
                Snare: <BeatTrack steps={rythm['snare']} /> <br/>
                Kick: <BeatTrack steps={rythm['kick']} /> <br/>
            </div>
        )
    }
}

export default BeatPattern;


// "accent": [1, 0, 1, 0, 1, 0, 0, 0 ,1, 1, 0, 0, 1, 0, 0, 0],
// "cymball": [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0],
// "open hat": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
// "closed hat": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
// "cowbell": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
// "clap": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
// "tom": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
// "snare": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
// "kick": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0]