import { combineReducers } from 'redux';

const beatlistdata = [
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
    }, genre: 'reggaeton', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol'},
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
    }, genre: 'reggaeton', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol'},
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
    }, genre: 'techno', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol'},
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
    }, genre: 'pop', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol'},
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
    }, genre: 'pop', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol'}
];

const beatsReducer = (beatlist, action) => {
    beatlist = beatlistdata;
    if (action.type === 'BEAT_SEARCH_BY_GENRE') {
        return beatlist.filter( beat => {
            return beat.genre.toLowerCase() === action.payload.toLowerCase()});
    }
    return beatlist;
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