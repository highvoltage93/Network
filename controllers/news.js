const Post = require('../models/post')

module.exports.getNews = async function (req, res){
    Post
        .find()
        .sort({date: -1})
        .then(posts => {
            res.status(200).send(posts)
        })
}