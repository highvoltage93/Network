const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const controller = require('../controllers/profile')


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname)
    }
})
const upload = multer({ storage: storage })

router.patch('/status', auth, controller.editStatus)
router.get('/status', auth, controller.getStatus)
router.get('/profilePosts/:userId', controller.getProfilePosts)
router.patch('/addFriend', auth, controller.addFriend)
router.get('/getFriends', auth, controller.getFriends)
router.get('/getFriends/:userId', auth, controller.getFriendsForProfilePage)
router.patch('/updateSettingsProfile', auth, upload.single('avatar'), controller.settingProfile)

module.exports = router;