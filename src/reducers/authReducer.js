// capitalize sintax means never change the value of this const
import { 
    SIGN_IN,
    SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    email: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN: 
            return {...state, isSignedIn: true, email: action.payload};
        case SIGN_OUT: 
            return {...state, isSignedIn: false, email: null};
        default: 
            return state;
    }
}