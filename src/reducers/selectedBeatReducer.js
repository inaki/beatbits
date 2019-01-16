import { BEAT_SELECTED } from '../actions/types';


export default (selectedBeat = null, action) => {
    if (action.type === BEAT_SELECTED) {
        return action.payload;
    } 
    return selectedBeat;
}