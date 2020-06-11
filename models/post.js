const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    post: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    authorAvatar: {
        type: String
    },
    authorName: {
        type: String
    },
    picturePost: {
        type: String
    },
    likesCount: {
        type: Number,
        default: 0,
        min: 0
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

module.exports = mongoose.model('Post', PostSchema)