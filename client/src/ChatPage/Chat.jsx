import React, { useState } from 'react';
import './Chat.css'

import Preloader from '../Ui/Preloader/Preloader'
import Dialog from './Dialog';
import ChatBlockContainer from './ChatBlockContainer';
import { Route } from 'react-router-dom';

const Chat = (props) => {
    const [partner_name, setPartner_name] = useState('')
    const [last_seen, setLast_seen] = useState('')
    
    let authID = props.userID ? props.userID ._id : null

    if (!props.dialogs) {
        return <Preloader />
    }

    return (
        <div className="chat_wraper">
            <div className="chat_nav">
                <div className="chat_dialog_nav">
                    <h1>Chats</h1>
                </div>
                {props.dialogs.map(el => {
                    return (<Dialog
                        id={el._id}
                        key={el._id}
                        partnerName={el.partner.name}
                        partnerAvatar={el.partner.avatar}
                        authorName={el.author.name}
                        avatar={el.author.avatar}
                        setPartner_name={setPartner_name}
                        setLast_seen={setLast_seen}
                        getMessage={props.getMessage}
                        userID={authID}
                        authorID={el.author._id}
                        partnerID={el.partner._id}
                    />
                    )
                })
                }

            </div>
            <div className="chat_dialog">
                <div className="chat_dialog_nav">
                    {
                        partner_name
                            ? <><h1>Chat with <span> {partner_name}</span></h1>
                                <h2>last online: {last_seen} hours ago</h2></>
                            : <h1>Chat </h1>
                    }
                </div>
                <Route exact path='/chat/:dialogId' component={ChatBlockContainer} />
            </div>
        </div >
    );
}

export default Chat;