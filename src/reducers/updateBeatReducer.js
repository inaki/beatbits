export default (state = {}, action) => {
    switch(action.type) {
        case 'PUT_BEAT_PATTERN':
            return {...state, ...action.payload};
        default: 
            return state;
    }
};