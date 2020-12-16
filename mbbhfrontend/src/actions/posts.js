export const fetchPostsSuccess = (posts) => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        posts
    }
}

export const showPost = (id) => {
    return {
        type: 'SHOW_POST',
        id
    }
}


export const newPost = (post) => {
    return {
        type: 'NEW_POST',
        post
    }
}

export const editPostItem = (post) => {
    return {
        type: 'EDIT_POST_ITEM',
        post
    }
}

export const logoutPostsSuccess = () => {
    return {
        type: 'LOGOUT_POSTS_SUCCESS'
    }
}
