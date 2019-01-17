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
    SIGN_OUT,
    ADD_USER
} from './types';

import uniqid from 'uniqid';

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
        payload: title.toLowerCase()
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
    beatsDatabase.get('/users').then(res => {
        const user = res.data.find(user => user.googleId === userId);
        //console.log(user.googleId !== userId)
        // console.log(user.googleId)
        // console.log(userId)
        if (user === undefined) {
            const profile = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
            console.log(profile.getName())
            beatsDatabase.post('/users', {
                "id": uniqid(),
                "googleId": profile.getId(),
                "name": profile.getName(),
                "email": profile.getEmail(),
                "profileImageUrl": profile.getImageUrl(),
                "likes": [],
                "beatsCreated": [],
                "profileDescription": null
            });
        } 
    }).then(res => console.log(res));

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

export const addUser = (user) => {
    return async dispatch => {
        const response = await beatsDatabase.post('/users', user);
        dispatch({type: ADD_USER, payload: response});
    };
};