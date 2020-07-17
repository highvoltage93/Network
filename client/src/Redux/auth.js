import axios from 'axios';
import setAuthToken from '../Middleware/setAuthToken';

const REGISTRATION = "REGISTRATION"
const LOAD_USER = "LOAD_USER"
const LOGOUT = "LOGOUT"
const NEW_EDIT_USER = 'NEW_EDIT_USER'
const ONLINE = "ONLINE"

const initailState = {
    userId: null,
    isLoading: false,
    isAuthorized: false,
    token: localStorage.getItem("token"),
    user: null,
    online: false
}

export const authReducer = (state = initailState, action) => {
    switch (action.type) {
        case REGISTRATION:
            localStorage.setItem('token', action.data.token)
            return {
                ...state,
                ...action.data,
                user: action.data.user,
                isAuthorized: true
            }
        case LOAD_USER:
            return {
                ...state,
                isAuthorized: true,
                user: action.user
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthorized: false
            }
        case NEW_EDIT_USER:
            return {
                ...state,
                user: action.user
            }
        case ONLINE:
            return {
                ...state,
                online: action.online
            }
        default:
            return state
    }
}


const registrationAC = (data) => ({ type: REGISTRATION, data })
const loadUserAc = (user) => ({ type: LOAD_USER, user })
const newEditUserAC = (user) => ({ type: NEW_EDIT_USER, user })
export const onlineTrue = (online) => ({type: ONLINE, online })


export const registration = (user) => {
    return dispatch => {
        axios
            .post('/auth/registration', {
                name: user.name,
                password: user.password,
                email: user.email,
                gender: user.gender
            })
            .then(res => {
                dispatch(registrationAC(res.data))
            })
    }
}

export const logInThunk = (user) => {
    return dispatch => {
        axios
            .post('/auth/logIn', {
                email: user.email, password: user.password
            })
            .then(res => {
                dispatch(registrationAC(res.data))
            })
    }
}

export const loadThunk = () => {
    return dispatch => {
        axios
            .get('/auth/auth')
            .then(res => {
                dispatch(loadUserAc(res.data))
            })
    }
}

export const logOutThunk = () => dispatch => {
    dispatch({ type: LOGOUT })
}


export const settingsProfileThunk = (user) => dispatch => {
    axios
        .patch('/profile/updateSettingsProfile', { user })
        .then(res => dispatch(newEditUserAC(res.data)))
}
