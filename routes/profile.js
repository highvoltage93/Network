const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const controller = require('../controllers/profile')

router.patch('/status', auth, controller.editStatus)
router.get('/status', auth,  controller.getStatus)
router.get('/profilePosts/:userId', controller.getProfilePosts)
router.patch('/addFriend', auth,  controller.addFriend)
router.get('/getFriends', auth,  controller.getFriends)

module.exports = router;