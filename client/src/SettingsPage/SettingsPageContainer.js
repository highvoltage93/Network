import React from 'react';
import SettingsPage from './SettingsPage';
import { connect } from 'react-redux';
import { settingsProfileThunk } from '../Redux/auth';
 
const SettingsPageContainer = (props) => {
    return <SettingsPage {...props}/>
}

let mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

let mapDispatchToProps = dispatch => {
    return {
        updateProfile: (profileId) => {
            dispatch(settingsProfileThunk(profileId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPageContainer)