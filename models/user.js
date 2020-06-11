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
    avatar: { type: String, },
    gender: { type: String },
    status: { type: String, default: "Enter your status" },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
})

module.exports = mongoose.model('User', UserSchema)