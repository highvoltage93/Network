import React, { useEffect } from 'react';
import Chat from './Chat';
import { connect } from 'react-redux'
import { getDialogsThunk, getMessageThunk } from '../Redux/chat';

const ChatContainer = (props) => {
    useEffect(() => {
        props.getDialogs()
    }, [])

    return <Chat {...props}  />
}


let mapStateToProps = (state) => {
    return {
        dialogs: state.chat.dialogs,
        userID: state.auth.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getMessage: (id) => {
            dispatch(getMessageThunk(id))
        },
        getDialogs: () => {
            dispatch(getDialogsThunk())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)