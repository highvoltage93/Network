import axios from 'axios'

const CHAT = "CHAT"
const MESSAGES_DIALOG = "MESSAGES_DIALOG"

const initialState = {
    dialogs: [],
    messages: []
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHAT:
            return {
                ...state,
                dialogs: [...action.dialogs]
            }
        case MESSAGES_DIALOG:
            return {
                ...state,
                messages: [...action.messages]
            }
        default:
            return state;
    }
}

const getDialogs = (dialogs) => ({ type: CHAT, dialogs })
const getMessagesDialog = (messages) => ({ type: MESSAGES_DIALOG, messages })

export const startDialogThunk = (partner) => dispatch => {
    axios
        .post('/chat/startDialog', { partner })
        .then(res => {
            // dispatch()
            console.log(res)
        })
}

export const getDialogsThunk = () => dispatch => {
    axios
        .get('/chat/getDialogs')
        .then(res => {
            dispatch(getDialogs(res.data))
        })
}

export const getMessageThunk = (dialogID) => dispatch => {
    axios
        .get(`/chat/getMessages/${dialogID}`)
        .then(res => {
            dispatch(getMessagesDialog(res.data.messages))
        })
}


export const sendMessageThunk = (dialogID, message_text) => dispatch => {
    axios
        .post(`/chat/create_message/${dialogID}`,{ message_text})
        .then(res => {
            console.log(res.data)
        })
}