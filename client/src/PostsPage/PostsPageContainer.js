import React, {useEffect} from 'react';
import PostsPage from './PostsPage';
import {connect} from 'react-redux'
import { addPostThunk, getMyPostsThunk} from '../Redux/posts'
 
const PostsPageContainer = (props) => {

    useEffect(() => {
        props.setPosts()
    }, [props.posts])

    return <PostsPage {...props}/>
}
 

const mapStateToProps = (state) => {
    return {
        posts: state.postPage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setPosts: () => {
            dispatch(getMyPostsThunk())
        },
        addPost: (post) => {
            dispatch(addPostThunk(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageContainer)