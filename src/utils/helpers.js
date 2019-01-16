export const generateBeats = (tracks) => { 
    let beats = {};
    tracks.map(beat => {
        let newVal = beat.value;
        let newBeat = {[newVal]: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
        beats = {...beats, ...newBeat};
    });
    return beats;
}