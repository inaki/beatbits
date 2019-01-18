
import { DELETE_BEAT_PATTERN } from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case DELETE_BEAT_PATTERN:
          return action.payload;
        default: 
            return state;
    }
};