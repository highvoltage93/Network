import React, {useEffect} from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { getProfileUserThunk } from '../Redux/mainPage';
import { getUserProfilePostsThunk, addFriendThunk } from '../Redux/profile';
 
const ProfilePageContainer = (props) => {

    useEffect(() => {
        let profileId = props.match.params.profileId 
        props.getProfile(profileId)
        props.getPosts(profileId)
    }, [])

    return (
    props.profileUser ? <ProfilePage {...props}/> : null)
}


let mapStateToProps = (state) => {
    return{
        authUserId: state.auth.user,
        profileUser: state.mainpage.profileUser,
        profilePosts: state.profile.userProfilePosts
    }
}

let mapDispatchToProps = dispatch => {
    return{
        getProfile: (profileId) => {
            dispatch(getProfileUserThunk(profileId))
        },
        getPosts: (profileUser) => {
            dispatch(getUserProfilePostsThunk(profileUser))
        },
        addFriend: (userId) => {
            dispatch(addFriendThunk(userId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer)
 