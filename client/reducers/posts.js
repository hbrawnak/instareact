function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const index = action.index;
            return [
                ...state.slice(0, index), //before the one updating
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index + 1), //after the one updating
            ]
        default:
            return state
    }
}

export default posts;