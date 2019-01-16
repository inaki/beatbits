import { 
    BEAT_PATTERN_DATA_INPUT,
    GET_BEAT_INPUT
} from '../actions/types';


export default (state = {}, action) => {
    switch(action.type) {
        case BEAT_PATTERN_DATA_INPUT:
            return {...state, ...action.payload};
        case GET_BEAT_INPUT:
            return {...state, ...action.payload}
        default: 
            return state;
    }
};