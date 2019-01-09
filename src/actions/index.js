// Action Creator

export const selectBeat = (song) => {
    // return an action
    return {
        type: 'BEAT_SELECTED',
        payload: song
    }
}