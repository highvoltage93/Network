import React, { useEffect } from 'react';
import ChatBlock from './ChatBlock';
import { connect } from 'react-redux';
import { getMessageThunk, sendMessageThunk } from '../Redux/chat';

const ChatBlockContainer = (props) => {

    useEffect(() => {
        let id = props.match.params.dialogId
        props.getMessage(id)
    }, [])

    let onSubmitMessage = (e) => {
        e.preventDefault()
        let id = props.match.params.dialogId
        let message_text = e.target.message_text.value
        props.sendMessage(id, message_text)
    }

    return <ChatBlock {...props} onSubmitMessage={onSubmitMessage} />
}


let mapStateToProps = (state) => {
    return {
        messages: state.chat.messages,
        userID: state.auth.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getMessage: (id) => {
            dispatch(getMessageThunk(id))
        },
        sendMessage: (dialogID, message_text) => {
            dispatch(sendMessageThunk(dialogID, message_text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBlockContainer)