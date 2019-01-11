import { combineReducers } from 'redux';
import beatsReducer from './beatsReducer';
import selectedBeatReducer from './selectedBeatReducer';
import beatsSearchReducer from './beatsSearchReducer';
import beatPatternInputReducer from './beatPatternInputReducer';

export default combineReducers({
    beats: beatsReducer,
    selectedBeat: selectedBeatReducer,
    beatsSearch: beatsSearchReducer,
    beatPatternInput: beatPatternInputReducer
});