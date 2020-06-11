import React from 'react';
import './Friends.css'
import { NavLink } from 'react-router-dom'

const Friends = ({ id, name }) => {
    return (
        <div className="friens_item">
            <NavLink to={`/profile/${id}`}><img src="" alt="" /></NavLink>
            <NavLink to={`/profile/${id}`}><h2>{name}</h2></NavLink>
        </div>
    );
}

export default Friends;