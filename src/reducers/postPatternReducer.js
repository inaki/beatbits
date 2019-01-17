export default (state = {}, action) => {
    switch(action.type) {
        case 'POST_BEAT_PATTERN':
            return {...state, ...action.payload};
        default: 
            return state;
    }
};