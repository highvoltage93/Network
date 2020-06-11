import React, {useEffect} from 'react';
import NavBar from './NavBar';
import {connect} from 'react-redux' 
import { logOutThunk } from '../Redux/auth';
import { editStatusAC, editStatusThunk, getStatusThunk } from '../Redux/profile';

const NavBarContainer = (props) => {

    useEffect(() => {
        props.getStatus()
    }, [])

    return <NavBar {...props}/>
}
 
const mapStateToprops = (state) => {
    return{
        auth: state.auth.isAuthorized,
        user: state.auth.user,
        status: state.profile.status
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logOut: () => {
            dispatch(logOutThunk())
        },
        editStatusValue: (status) => {
            dispatch(editStatusAC(status))
        },
        editStatus: (status) => {
            dispatch(editStatusThunk(status))
        },
        getStatus: () => {
            dispatch(getStatusThunk())
        }

    }
}


export default connect(mapStateToprops, mapDispatchToProps)(NavBarContainer)