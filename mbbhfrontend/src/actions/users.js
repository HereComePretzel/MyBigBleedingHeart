export const newUser = (user) => {
    return {
        type: 'NEW_USER',
        user
    }
}

export const editUser = (user) => {
return {
    type: 'EDIT_USER',
    user
    }
}

// export const deleteUser = (user) => {
//     return {
//         type: 'DELETE_USER'
//     }
// }

// export const logoutUserSuccess = () => {
//     return {
//         type: 'LOGOUT_USER_SUCCESS'
//     }
// } 
