export default (state = null, action) => {
    switch(action.type) {
        case 'BEAT_SEARCH_BY_GENRE_SELECT':
            return {genre: action.payload, type: 'select'};
        case 'BEAT_SEARCH_BY_GENRE_INPUT':
            return {title: action.payload, type: 'input'};
        default: 
            return state;
    }
};      