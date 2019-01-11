// Action Creator
import beatsDatabase from '../api/beatsDatabase';

export const fetchBeats = () => {
    return async dispatch => {
        const response = await beatsDatabase.get('/beatsDatabase');
        dispatch({type: 'FETCH_BEATS', payload: response.data});
    }
}

export const fetchUsers = (id) => {
    return async dispatch => {
        const response = await beatsDatabase.get(`/users`);
        dispatch({type: 'FETCH_USERS', payload: response.data});
    }
}

export const selectBeat = (song) => {
    // return an action
    return {
        type: 'BEAT_SELECTED',
        payload: song
    }
}

export const searchBeatSelect = (genre) => {
    return {
        type: 'BEAT_SEARCH_BY_GENRE_SELECT',
        payload: genre
    }
}

export const searchBeatInput = (title) => {
    return {
        type: 'BEAT_SEARCH_BY_GENRE_INPUT',
        payload: title
    }
}

export const patternInput = (beatData) => {
    return {
        type: 'BEAT_PATTERN_DATA_INPUT',
        payload: beatData
    }
}

export const getBeatInput = (beats) => {
    return {
        type: 'GET_BEAT_INPUT',
        payload: beats
    }
}

export const postBeat = (beatPattern) => {
    return async dispatch => {
        const response = await beatsDatabase.post('/beatsDatabase', beatPattern);
        dispatch({type: 'POST_BEAT_PATTERN', payload: response});
    }
}