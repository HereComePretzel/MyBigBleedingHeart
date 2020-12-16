const initialState = []



const posts = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return [...action.posts]
        case 'LOGOUT_SUCCESS':
            return []
        case 'SHOW_POST':
            const id = parseInt(action.id)
            const post = state.filter(post => {
                return post.id === id})
            return post
        case 'NEW_POST':
            return [...state, action.post]
        case 'EDIT_POST_ITEM':
            const editedPost = {
                ...state[0],
                date: action.post.date,
                number: action.post.number,
                meds_taken: action.post.meds_taken,
                suicidal_thoughts: action.post.suicidal_thoughts,
                good_thoughts: action.post.good_thoughts,
                bad_thoughts: action.post.bad_thoughts,
                goals: action.post.goals,
                notes: action.post.notes,
                happy_memory: action.post.happy_memory
            }
            return [editedPost]
        case 'DELETE_POST':
            const delId = parseInt(action.id)
            const delPost = state.filter(post => {
                return post.id !== delId})
            return delPost

        default:
            return state
    }
}

export default posts
