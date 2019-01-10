// Action Creator

export const selectBeat = (song) => {
    // return an action
    return {
        type: 'BEAT_SELECTED',
        payload: song
    }
}

export const searchBeat = (genre = 'Techno') => {
    return {
        type: 'BEAT_SEARCH_BY_GENRE',
        payload: genre
    }
}