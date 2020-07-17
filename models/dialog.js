const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DialogSchema = new Schema({
    partner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date_create_dialog: {
        type: Date,
        default: Date.now()
    },
    last_message: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    },
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]

})



module.exports = mongoose.model('Dialog', DialogSchema)