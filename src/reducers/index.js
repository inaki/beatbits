import { combineReducers } from 'redux';
import beatsReducer from './beatsReducer';
import selectedBeatReducer from './selectedBeatReducer';
import beatsSearchReducer from './beatsSearchReducer';
import beatPatternInputReducer from './beatPatternInputReducer';
import authReducer from './authReducer';
import updateBeatReducer from './updateBeatReducer';
import postPatternReducer from './postPatternReducer';
import manageUserReducer from './manageUserReducer';
import fetchUsersReducer from './fetchUsersReducer';
import deletePatternReducer from './deletePatternReducer';

export default combineReducers({
    beats: beatsReducer,
    selectedPattern: selectedBeatReducer,
    beatsSearch: beatsSearchReducer,
    beatPatternInput: beatPatternInputReducer,
    auth: authReducer,
    updateBeat: updateBeatReducer,
    deletePattern: deletePatternReducer,
    postPattern: postPatternReducer,
    manageUser: manageUserReducer,
    users: fetchUsersReducer
});