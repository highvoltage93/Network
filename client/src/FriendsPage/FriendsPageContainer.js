import React, { useEffect } from 'react';
import FriendsPage from './FriendsPage';
import { connect } from 'react-redux';
import { friendsThunk } from '../Redux/profile';

const FriendsPageContainer = (props) => {

    useEffect(() => {
        props.friendsGetAll()
    }, [])

    return <FriendsPage {...props} />
}

let mapStateToProps = (state) => {
    return {
        friends: state.profile.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        friendsGetAll: () => {
            dispatch(friendsThunk())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPageContainer)

