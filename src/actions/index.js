// Action Creator

export const selectBeat = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}