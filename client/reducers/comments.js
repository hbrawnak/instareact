function postComment(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ]
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.index), // From the start to the one want to delete
                ...state.slice(0, action.type + 1) // After deleted one, to the end
            ]
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.type !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComment(state[action.postId], action)
        }
    }
    return state;
}

export default comments;