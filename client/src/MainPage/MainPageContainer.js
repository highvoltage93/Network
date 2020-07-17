import React,{useEffect} from 'react';
import MainPage from './MainPage';
import {connect} from 'react-redux'

import {allUsersThunk} from '../Redux/mainPage'

const MainPageContainer = (props) => {
    useEffect(() => {
        props.allUsersFunc()
       }, [])
    return <MainPage {...props}/>
}
 
let mapStateToProps = (state) => {
    return{
        allUsers: state.mainpage.allUsers,
        online: state.auth.online
    }
}


let mapDispatchToprops = dispatch => {
    return{
    allUsersFunc: () => {
        dispatch(allUsersThunk())
    }
}
}

export default connect(mapStateToProps, mapDispatchToprops)(MainPageContainer)