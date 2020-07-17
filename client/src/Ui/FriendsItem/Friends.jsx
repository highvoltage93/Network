import React from 'react';
import './Friends.css'
import { NavLink } from 'react-router-dom'

const Friends = ({ id, name, avatar, style }) => {
    return (
        <div className={`friens_item ${style}`} key={id}>
            <NavLink to={`/profile/${id}`}><img src={avatar} alt={name} /></NavLink>
            <NavLink to={`/profile/${id}`}><h2>{name}</h2></NavLink>
        </div>
    );
}

export default Friends;