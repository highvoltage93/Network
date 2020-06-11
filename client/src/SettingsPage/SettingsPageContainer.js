import React from 'react';
import SettingsPage from './SettingsPage';
import { connect } from 'react-redux';
 
const SettingsPageContainer = (props) => {
    return <SettingsPage {...props}/>
}


export default connect(null, null)(SettingsPageContainer)