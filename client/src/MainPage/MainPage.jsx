import React from 'react';
import './MainPage.css'
import UserLogo from '../Utills/Pictures/user.jpg'
import { NavLink } from 'react-router-dom';

const MainPage = (props) => {
    return (
        <div className="MainPage-wrapper">
            <h1>Welcome to Social Network</h1>
            <img className="poster" src="https://scx2.b-cdn.net/gfx/news/hires/2019/socialnetwork.jpg" alt="" />
            <div className="top-info">
                <h2>New Users</h2>
                <div className="top-wrap">
                    {
                        props.allUsers.map(user => {
                            return (
                                <NavLink to={`/profile/${user._id}`} className="top-item" key={user._id}>
                                    <img src={user.avatar ? user.avatar : UserLogo} alt="" />
                                    <span>{props.online ? "Online" : "Offline"}</span>
                                    <p>{user.name}</p>
                                </NavLink>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default MainPage;
