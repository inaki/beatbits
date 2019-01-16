// Action Creator
import beatsDatabase from '../api/beatsDatabase';
import { 
    FETCH_BEATS,
    FETCH_USERS,
    BEAT_SELECTED,
    BEAT_SEARCH_BY_GENRE_INPUT,
    BEAT_SEARCH_BY_GENRE_SELECT,
    GET_BEAT_INPUT,
    POST_BEAT_PATTERN,
    PUT_BEAT_PATTERN,
    BEAT_PATTERN_DATA_INPUT,
    SIGN_IN,
    SIGN_OUT
} from './types';

export const fetchBeats = () => {
    return async dispatch => {
        const response = await beatsDatabase.get('/beatsDatabase');
        dispatch({type: FETCH_BEATS, payload: response.data});
    };
};

export const fetchUsers = (id) => {
    return async dispatch => {
        const response = await beatsDatabase.get(`/users`);
        dispatch({type: FETCH_USERS, payload: response.data});
    };
};

export const selectBeat = (song) => {
    // return an action
    return {
        type: BEAT_SELECTED,
        payload: song
    };
};

export const searchBeatSelect = (genre) => {
    return {
        type: BEAT_SEARCH_BY_GENRE_SELECT,
        payload: genre
    };
};

export const searchBeatInput = (title) => {
    return {
        type: BEAT_SEARCH_BY_GENRE_INPUT,
        payload: title
    };
};

export const patternInput = (beatData) => {
    return {
        type: BEAT_PATTERN_DATA_INPUT,
        payload: beatData
    };
};

export const getBeatInput = (beats) => {
    return {
        type: GET_BEAT_INPUT,
        payload: beats
    };
};

export const postBeat = (beatPattern) => {
    return async dispatch => {
        const response = await beatsDatabase.post('/beatsDatabase', beatPattern);
        dispatch({type: POST_BEAT_PATTERN, payload: response});
    };
};

export const updateBeat = (beatPattern) => {
    return async dispatch => {
        const response = await beatsDatabase.put(`/beatsDatabase/${beatPattern.id}`, beatPattern);
        dispatch({type: PUT_BEAT_PATTERN, payload: response});
    };
};

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};