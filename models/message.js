const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    message_text: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    dialog: {
        type: Schema.Types.ObjectId,
        ref: 'Dialog'
    },
    read: {
        type: Boolean,
        default: false
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Message', MessageSchema)