const User = require('../models/user')
const Post = require('../models/post')

module.exports.getProfilePosts = async (req, res) => {
    const posts = await Post.find({ author: req.params.userId.toString() }).sort({ date: -1 })
    res.status(200)
    res.send(posts)
}


module.exports.getStatus = async (req, res) => {
    const user = await User.findById(req.user.id).select('status')
    res.status(200)
    res.send(user)
}

module.exports.editStatus = async (req, res) => {
    const user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: req.body },
        { new: true }
    )
    res.status(200)
    res.send(user)
}

module.exports.addFriend = async (req, res) => {
    const user = await User.findByIdAndUpdate(
        { _id: req.user.id },
        {
            $push: {
                friends: [req.body.userId]
            }
        },
        { new: true }
    )

    res.status(200)
    res.send(user)
}

module.exports.getFriends = async (req, res) => {
    const friends = await User
        .findById(req.user.id)
        .populate('friends')
        .populate('avatar _id name')
        .exec()

    res.status(200)
    res.send(friends)
}