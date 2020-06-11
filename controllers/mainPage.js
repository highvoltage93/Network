const User = require('../models/user')

module.exports.allUsers = function(req, res) {
    User.find()
        .limit(12)
        .sort({ registerDate: -1 })
        .then(users => {
            res.status(200).send(users)
        })
}

module.exports.profileUser = async function(req, res){
    let id = await User.findById(req.params.profileId)
    res.status(200)
    res.send(id)
}