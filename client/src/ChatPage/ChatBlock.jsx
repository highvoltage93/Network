import React from 'react';
import './Chat.css'
import { format } from 'date-fns'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Send from '../Utills/Pictures/send.png'
import Preloader from '../Ui/Preloader/Preloader'

const ChatBlock = (props) => {
    if (!props.userID) { return <Preloader /> }
    return (<>
        <div className="chat_dialog_wrap">
            {
                props.messages
                    ? props.messages.map(el => {
                        return (<div className={
                            props.userID._id === el.author
                                ? `my_message_wrap`
                                : `partner_message_wrap`
                        }>
                            <div className={
                                props.userID._id === el.author
                                    ? `my_message`
                                    : `partner_message`
                            }><span>{el.message_text}</span></div>
                            <p className="message_time">
                                {format(Date.parse(el.date), 'p')}
                                {/* {formatDistanceToNow(Date.parse(el.date), { includeSeconds: true, addSuffix: true })} */}
                            </p>
                        </div>)

                    })
                    : null
            }
        </div>
        <form className="chat_dialog_input" onSubmit={props.onSubmitMessage}>
            <textarea className="chat_inp" type="text" name="message_text"></textarea>
            <button className="button_send"><img src={Send} alt="" /></button>
        </form>
    </>
    );
}

export default ChatBlock;