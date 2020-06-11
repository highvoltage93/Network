import axios from 'axios'

const SET_POSTS = "SET_POSTS"
const ADD_POST = "ADD_POST"

const initialState = {
    posts: [
       
    ]
}

export let postsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.post, ...state.posts]
            }
        default:
            return state
    }
}

export const setPostsAC = (posts) => ({type: SET_POSTS, posts})
export const addPostAC = (post) => ({type: ADD_POST, post})


export const addPostThunk = (post) => {
    debugger
    return dispatch => {
        let formdata = new FormData()
        formdata.append("post", post.post)
        formdata.append("picturePost", post.post_picture)
        axios
            .post('/addPost', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                // post: post.post,
                // post_picture: post.post_picture 
            })
            .then(res => {
                console.log(res)
            })

    }
}

export const getMyPostsThunk = () => dispatch => {
    axios
        .get('/myPosts')
        .then(res => {
            dispatch(setPostsAC(res.data))
        })
}

export const deletePostThunk = (postId) => dispatch => {
    axios
        .post('/deletePost', {postId: postId})
        .then(res => console.log(res))

}