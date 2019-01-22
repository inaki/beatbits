import { combineReducers } from 'redux';
import beatsReducer from './beatsReducer';
import selectedBeatReducer from './selectedBeatReducer';
import beatsSearchReducer from './beatsSearchReducer';
import beatPatternInputReducer from './beatPatternInputReducer';
import authReducer from './authReducer';
import manageUserReducer from './manageUserReducer';
import fetchUsersReducer from './fetchUsersReducer';

export default combineReducers({
    beats: beatsReducer,
    selectedPattern: selectedBeatReducer,
    beatsSearch: beatsSearchReducer,
    beatPatternInput: beatPatternInputReducer,
    auth: authReducer,
    manageUser: manageUserReducer,
    users: fetchUsersReducer
});