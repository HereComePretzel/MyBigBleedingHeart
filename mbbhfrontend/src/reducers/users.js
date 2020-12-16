const initialState = []



const users = (state=initialState, action) => {
    switch(action.type) {
        case 'NEW_USER':
            return [...state, action.user]
        case 'LOGOUT_SUCCESS':
            return {}
        case 'EDIT_USER':
            const editedUser = {
                ...state[0],
                username: action.user.username,
                password: action.user.password,
                email: action.user.email,
                name: action.user.name,
                birthday: action.user.birthday,
                age: action.user.age,
                gender: action.user.gender,
                sexual_orientation: action.user.sexual_orientation,
                zipcode: action.user.zipcode
                
            }
            return[editedUser]
        default:
            return state
    }
}

export default users