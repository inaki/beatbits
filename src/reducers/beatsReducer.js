import { FETCH_BEATS, POST_BEAT_PATTERN, PUT_BEAT_PATTERN, DELETE_BEAT_PATTERN } from '../actions/types';


export default (state = [], action) => {
    switch(action.type) {
        case FETCH_BEATS:
            return action.payload;
        case POST_BEAT_PATTERN: 
            return [...state, action.payload];
        case PUT_BEAT_PATTERN: 
            return Object.assign([], state, action.payload);
        case DELETE_BEAT_PATTERN:
            return state.filter(beat => beat.id !== action.payload);
        default: 
            return state;
    }
};