export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BEATS':
            return action.payload;
        default: 
            return state;
    }
};