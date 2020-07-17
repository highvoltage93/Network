import React from 'react';
import './SettingsPage.css'
import Button from '../Ui/Button/Button'
import Preloader from '../Ui/Preloader/Preloader'
import { useHistory } from "react-router-dom";

const SettingsPage = ({ updateProfile, user }) => {
    let history = useHistory();

    if (!user) {
        return <Preloader />
    }
    let onSubmit = (e) => {
        debugger
        e.preventDefault()
        let userEdit = {
            avatar: e.target.avatar.files[0] === "" ? user.avatar : e.target.avatar.files[0],
            email: e.target.email.value === "" ? user.email : e.target.email.value,
            name: e.target.name.value === "" ? user.name : e.target.name.value,
            city: e.target.city.value === "" ? user.city : e.target.city.value,
            birthDay: e.target.birthDay.value === "" ? user.birthDay : e.target.birthDay.value,
        }
        updateProfile(userEdit)
        history.push(`/profile/${user._id}`)

    }
    return (
        <>
            <h1 className="settings_title">My Profile Settings</h1>
            <form onSubmit={onSubmit} className="form_settings">
                <div className="settings_item">
                    <div className="settings_desc">
                        <h2>Edit your avatar: </h2>
                    </div>
                    <div className="settings_cont">
                        <input type="file" name="avatar" />
                    </div>
                </div>
                <div className="settings_item">
                    <div className="settings_desc">
                        <h2>Edit your Email: </h2>
                    </div>
                    <div className="settings_cont">
                        <input className="inp" type="email" name="email" placeholder={user.email} defaultValue={user.email} />
                    </div>
                </div>
                <div className="settings_item">
                    <div className="settings_desc">
                        <h2>Edit your Name: </h2>
                    </div>
                    <div className="settings_cont">
                        <input className="inp" type="text" name="name" placeholder={user.name} defaultValue={user.name} />
                    </div>
                </div>
                <div className="settings_item">
                    <div className="settings_desc">
                        <h2>Edit your city: </h2>
                    </div>
                    <div className="settings_cont">
                        <input className="inp" type="text" name="city" placeholder={user.city} defaultValue={user.city} />
                    </div>
                </div>
                <div className="settings_item">
                    <div className="settings_desc">
                        <h2>Edit your birthDay: </h2>
                    </div>
                    <div className="settings_cont">
                        <input className="inp" type="date" name="birthDay" placeholder="Date" defaultValue={user.birthDay} />
                    </div>
                </div>
                <Button>Save</Button>
            </form>
        </>
    );
}

export default SettingsPage;