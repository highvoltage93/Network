const User = require('../models/user')
const Post = require('../models/post')


module.exports.addPost = async (req, res) => {
    let author = await User.findById(req.user.id)
        .populate('posts')
        .exec()
    // let picturePost = req.file ? req.file.path : ''
    const newPost = await new Post({
        post: req.body.post,
        authorAvatar: author.avatar,
        authorName: author.name,
        author: author._id,
        picturePost: req.file ? req.file.path : ''

    })

    let updateUser = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $push: { posts: newPost._id } },
        { new: true }
    )

    newPost.save().then()
    res.status(200)

}

module.exports.getMyposts = async (req, res) => {
    let author = await req.user.id
    const posts = await Post.find({ author: author }).sort({ date: -1 })
    res.status(200)
    res.send(posts)
}


module.exports.deletePost = async (req, res) => {
    let post = await Post.findById(req.body.postId).deleteOne()
    res.status(200)
}


module.exports.like = async (req, res) => {
    let like = await Post.findByIdAndUpdate(
        { _id: req.body.postId },
        {
            $inc: {
                    likesCount: +1
            },
            $push: {
                    likes: [req.user.id]
            }
        },
        { new: true }
    )
    res.status(200)
    res.send(like)
}

module.exports.disLike = async (req, res) => {
    let like = await Post.findByIdAndUpdate(
        { _id: req.body.postId },
        {
            $inc: {
                    likesCount: -1
            },
            $pull: {
                    "likes": req.user.id
            }
        },
        { new: true }
    )
    res.status(200)
    res.send(like)
}