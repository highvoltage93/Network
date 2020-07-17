import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import './Chat.css'


const Dialog = ({ userID, authorID, partnerID, id, avatar, partnerAvatar, authorName, partnerName, setPartner_name, setLast_seen, getMessage, ...props }) => {

    const [myDialog, setMyDialog] = useState(false);

    useEffect(() => {
        if (userID != authorID) {
            setMyDialog(true)
        } else {
            setMyDialog(false)
        }
    }, [userID]);



    let onClickDialog = (partnerName, id) => {
        setPartner_name(partnerName)
        getMessage(id)
    }
    return (
        <NavLink onClick={() => onClickDialog(authorName, id)} to={`/chat/${id}`} key={id} div className="chat_item" >
            <img src={myDialog ? avatar : partnerAvatar} alt="" />
            <div>
                <h2>{myDialog ? authorName : partnerName}</h2>
                {/* <p>{el.last_message}</p> */}
            </div>
        </NavLink>
    );
}

export default Dialog;