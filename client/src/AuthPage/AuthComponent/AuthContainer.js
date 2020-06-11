import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux'
import {registration, logInThunk} from '../../Redux/auth'
 
const AuthContainer = (props) => {
    return <Auth {...props}/>
}
 
const mapDispatchToProps = dispatch => {
    return{
        registration: (user) => {
            dispatch(registration(user))
        },
        logIn: (user) => {
            dispatch(logInThunk(user))
        }
    }
}


export default connect(null, mapDispatchToProps)(AuthContainer)