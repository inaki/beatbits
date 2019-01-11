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