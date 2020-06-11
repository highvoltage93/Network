import axios from 'axios';

const ALL_USERS = "ALL_USERS"
const GET_PROFILE_USER = "GET_PROFILE_USER"

let initialState = {
    allUsers : [],
    profileUser: null
}

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_USERS:
            return {
                ...state,
                allUsers: action.allUsers
            }
        case GET_PROFILE_USER:
            return {
                ...state,
                profileUser: action.profileUser
            }
        default:
            return state
    }
}

const allUsersAC = (allUsers) => ({type: ALL_USERS, allUsers})
const getProfileAC = (profileUser) => ({type: GET_PROFILE_USER, profileUser})

export const allUsersThunk = () => {
    return dispatch => {
        axios
            .get('/allUsers')
            .then(allUsers => {
                dispatch(allUsersAC(allUsers.data))
            })
    }
}

export const getProfileUserThunk = (profileUser) => {
    return dispatch => {
        axios
            .get(`/profileUser/${profileUser}`)
            .then(data => {
                dispatch(getProfileAC(data.data))
            })
    }
}


