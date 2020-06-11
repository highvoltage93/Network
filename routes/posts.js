const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
// const upload = require('../middleware/uploadImage')

const controller = require('../controllers/posts')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname)
    }
})
const upload = multer({ storage: storage })



router.post('/addPost',auth, upload.single('picturePost'), controller.addPost )
router.get('/myPosts', auth, controller.getMyposts)
router.post('/deletePost', auth, controller.deletePost)
router.patch('/likePost', auth, controller.like)
router.patch('/disLikePost', auth, controller.disLike)


module.exports = router;