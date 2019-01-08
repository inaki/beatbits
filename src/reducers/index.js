import { combineReducers } from 'redux';

const beatsReducer = () => {
    return [
        {id: 1,title: 'Mi Gente', bpm: '115', "rythm": {
            "accent": [1, 0, 1, 0, 1, 0, 0, 0 ,1, 1, 0, 0, 1, 0, 0, 0],
            "cymball": [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0],
            "open hat": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "closed hat": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "cowbell": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "clap": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "tom": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "snare": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "kick": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0]
        }, genre: 'reggaeton', description: 'lorem ladjflk adjflk adkfj akldjfkl adjfakl djfljadlkfj adlkj fad jf'},
        {id: 2,title: 'El Ganador', bpm: '118', "rythm": {
            "accent": [1, 0, 1, 0, 1, 0, 0, 0 ,1, 1, 0, 0, 1, 0, 0, 0],
            "cymball": [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0],
            "open hat": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "closed hat": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "cowbell": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "clap": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "tom": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "snare": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "kick": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0]
        }, genre: 'reggaeton', description: 'lorem ladjflk adjflk adkfj akldjfkl adjfakl djfljadlkfj adlkj fad jf'},
        {id: 3,title: 'Born Sleepy', bpm: '128', "rythm": {
            "accent": [1, 0, 1, 0, 1, 0, 0, 0 ,1, 1, 0, 0, 1, 0, 0, 0],
            "cymball": [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0],
            "open hat": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "closed hat": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "cowbell": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "clap": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "tom": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "snare": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "kick": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0]
        }, genre: 'techno', description: 'lorem ladjflk adjflk adkfj akldjfkl adjfakl djfljadlkfj adlkj fad jf'},
        {id: 4,title: 'Sexual Healing', bpm: '122', "rythm": {
            "accent": [1, 0, 1, 0, 1, 0, 0, 0 ,1, 1, 0, 0, 1, 0, 0, 0],
            "cymball": [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0],
            "open hat": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "closed hat": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "cowbell": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "clap": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "tom": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "snare": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "kick": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0]
        }, genre: 'pop', description: 'lorem ladjflk adjflk adkfj akldjfkl adjfakl djfljadlkfj adlkj fad jf'},
        {id: 5,title: 'Afrika', bpm: '122', "rythm": {
            "accent": [1, 0, 1, 0, 1, 0, 0, 0 ,1, 1, 0, 0, 1, 0, 0, 0],
            "cymball": [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0],
            "open hat": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "closed hat": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "cowbell": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "clap": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "tom": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "snare": [1, 0, 0, 0, 1, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0],
            "kick": [0, 0, 0, 0, 0, 0, 0, 0 ,1, 0, 0, 0, 1, 0, 0, 0]
        }, genre: 'pop', description: 'lorem ladjflk adjflk adkfj akldjfkl adjfakl djfljadlkfj adlkj fad jf'}
    ];
};

const selectedBeatReducer = (selectedBeat = null, action) => {
    if (action.type === 'BEAT_SELECTED') {
        return action.payload;
    } 

    return selectedBeat;
}

export default combineReducers({
    beats: beatsReducer,
    selectedBeat: selectedBeatReducer
});