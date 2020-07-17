import axios from 'axios'

const EDIT_STATUS = "EDIT_STATUS"
const SET_USER_PROFILE_POSTS = "SET_USER_PROFILE_POSTS"
const UPDATE_PROFILE_POST_AFTER_LIKE = "UPDATE_PROFILE_POST_AFTER_LIKE"
const FRIENDS = "FRIENDS"
const GET_FRIENDS_FOR_PRFILE = "GET_FRIENDS_FOR_PRFILE"

let initialState = {
    status: '',
    userProfilePosts: [],
    friends: [],
    fiendsItem: false,
    profileFriends: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_STATUS:
            return {
                ...state,
                status: action.status
            }
        case FRIENDS:
            return {
                ...state,
                friends: [...action.friends]
            }
        case SET_USER_PROFILE_POSTS:
            return {
                ...state,
                userProfilePosts: [...action.posts]
            }
        case UPDATE_PROFILE_POST_AFTER_LIKE:
            return {
                ...state,
                userProfilePosts: state.userProfilePosts.map(el => {
                    if (el._id === action.post._id) {
                        return {
                            ...el,
                            likesCount: action.post.likesCount,
                            likes: action.post.likes
                        }
                    }
                    return el
                })
            }
        case GET_FRIENDS_FOR_PRFILE:
            return {
                ...state,
                profileFriends: [...action.friends]
            }
        default:
            return state;
    }
}

export const editStatusAC = (status) => ({ type: EDIT_STATUS, status })
const setUserProfilePosts = posts => ({ type: SET_USER_PROFILE_POSTS, posts })
const updatePostLikeAC = (post) => ({ type: UPDATE_PROFILE_POST_AFTER_LIKE, post })
const friendsAC = (friends) => ({ type: FRIENDS, friends })

export const getUserProfilePostsThunk = (profileUser) => dispatch => {
    axios
        .get(`/profile/profilePosts/${profileUser}`)
        .then(res => {
            dispatch(setUserProfilePosts(res.data))
        })
}

export const getStatusThunk = () => dispatch => {
    axios
        .get('/profile/status')
        .then(res => {
            dispatch(editStatusAC(res.data.status))
        })
}


export const editStatusThunk = (status) => dispatch => {
    axios
        .patch('/profile/status', { status })
        .then(res => console.log('status', res))
}

export const likePosts = (postId) => dispatch => {
    axios
        .patch('/likePost', { postId })
        .then(res => {
            dispatch(updatePostLikeAC(res.data))
        })
}
export const disLikePosts = (postId) => dispatch => {
    axios
        .patch('/disLikePost', { postId })
        .then(res => {
            dispatch(updatePostLikeAC(res.data))
        })
}

export const addFriendThunk = (userId) => dispatch => {
    axios
        .patch('/profile/addFriend', { userId })
        .then(res => {
            console.log(res)
        })
}

export const friendsThunk = () => dispatch => {
    axios
        .get('/profile/getFriends')
        .then(res => {
            dispatch(friendsAC(res.data.friends))
        })
}

export const getFriendsForProfileThunk = (userId) => dispatch => {
    axios
        .get(`/profile/getFriends/${userId}`)
        .then(res => {
            dispatch({
                type: GET_FRIENDS_FOR_PRFILE,
                friends: res.data.friends
            })
        })
}


