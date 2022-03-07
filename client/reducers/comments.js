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
            console.log('removing comment');
            return state;
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