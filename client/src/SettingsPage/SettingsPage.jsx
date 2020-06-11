import React from 'react';
import './SettingsPage.css'
 
const SettingsPage = () => {
    return (
        <>
            <h1 className="settings_title">My Profile Settings</h1>
            <div className="settings_item">
                <div className="settings_desc">
                    <h2>Edit your avatar: </h2>
                </div>
                <div className="settings_cont">
                    <input type="file" name="avatar"/>
                </div>
            </div>
        </>
    );
}
 
export default SettingsPage;