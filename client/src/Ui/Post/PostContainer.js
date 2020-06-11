import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { likePosts, disLikePosts } from '../../Redux/profile';
import { deletePostThunk } from '../../Redux/posts';
 
const PostContainer = (props) => {
    return <Post {...props}/>
}
 
const mapStateToProps = (state) => {
    return {
        authUserId: state.auth.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        likePosts: (postId) => {
            dispatch(likePosts(postId))
        },
        disLikePosts: (postId) => {
            dispatch(disLikePosts(postId))
        },
        deletePost: (postId) => {
            dispatch(deletePostThunk(postId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)

