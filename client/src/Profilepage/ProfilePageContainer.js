import React, { useEffect } from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { getProfileUserThunk } from '../Redux/mainPage';
import { getUserProfilePostsThunk, addFriendThunk, getFriendsForProfileThunk } from '../Redux/profile';
import { startDialogThunk } from '../Redux/chat';

const ProfilePageContainer = (props) => {
    useEffect(() => {
        let profileId = props.match.params.profileId
        props.getProfile(profileId)
        props.getPosts(profileId)
        props.getFriendsForProfile(profileId)
    }, [])

    return (
        props.profileUser ? <ProfilePage {...props} /> : null)
}


let mapStateToProps = (state) => {
    return {
        authUserId: state.auth.user,
        profileUser: state.mainpage.profileUser,
        profilePosts: state.profile.userProfilePosts,
        profileFriends: state.profile.profileFriends
    }
}

let mapDispatchToProps = dispatch => {
    return {
        getProfile: (profileId) => {
            dispatch(getProfileUserThunk(profileId))
        },
        getPosts: (profileUser) => {
            dispatch(getUserProfilePostsThunk(profileUser))
        },
        addFriend: (userId) => {
            dispatch(addFriendThunk(userId))
        },
        getFriendsForProfile: (userId) => {
            dispatch(getFriendsForProfileThunk(userId))
        },
        startDialog: (partner) => {
            dispatch(startDialogThunk(partner))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer)
