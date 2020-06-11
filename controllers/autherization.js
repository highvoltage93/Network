const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')


const User = require('../models/user')

module.exports.registration =  async (req, res) => {
    let {name, email, password, gender} = req.body
    if (!name || !password || !email) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    try {
        User.findOne({email})
        .then(user => {
            if(user) {res.status(400).json({msg : "User already exists"})}

            const newUser = new User({
                name, email, password, gender
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err
                    newUser.password = hash
                    newUser.save()
                        .then(user => {
                            const payload = {
                                    user: {
                                        id: newUser.id
                                    }
                                }
                            jwt.sign({payload},
                                config.get('JWTSecret'),{expiresIn: 3600},
                                (err, token) => {
                                    if(err) {throw err}
                                    res.status(200).json({
                                        token,
                                        user
                                    })
                                }
                            ) 
                            })
                    })
                })
        })
    } catch (error) {
        console.log(error)
    }
    
     
}

module.exports.logIn = function(req, res){
    let {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({msg : 'Please anter all fields'})
    }

    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json({msg: 'User Does not exists'}) 

            const isMatch = bcrypt.compare(password, user.password)
            // bcrypt.compare(password, user.password)
            if(!isMatch) return res.json({msg : 'Invalid credentials'})

            const payload = {
                user: {
                    id: user.id
                }
            }
        jwt.sign({payload},
            config.get('JWTSecret'),{expiresIn: '365d'},
            (err, token) => {
                if(err) {throw err}
                res.status(200).json({
                    token,
                    user
                })
            }
        ) 
        })
}

module.exports.auth = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.log('LoaduserError', error)
    }
   
    
    
}