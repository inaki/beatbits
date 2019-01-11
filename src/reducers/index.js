import { combineReducers } from 'redux';
import beatsReducer from './beatsReducer';
import selectedBeatReducer from './selectedBeatReducer';
import beatsSearchReducer from './beatsSearchReducer';

export default combineReducers({
    beats: beatsReducer,
    selectedBeat: selectedBeatReducer,
    beatsSearch: beatsSearchReducer
});