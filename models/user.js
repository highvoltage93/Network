const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    // friends: {
    //     type: [{ userid: { type: Schema.Types.ObjectId, default: '', index: { unique: true, sparse: true } } }],
    //     default: undefined
    // },
    city: {
        type: String,
        default: 'Enter your date in settings'
    },
    birthDay: {
        type: Date,
        default: Date.now()
    },
    avatar: {
        type: String,
        default: ""
    },
    gender: {
        type: String
    },
    status: { type: String, default: "Enter your status" },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
})


module.exports = mongoose.model('User', UserSchema)