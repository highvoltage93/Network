const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const controller = require('../controllers/autherization')

router.post('/registration', controller.registration)
router.post('/logIn', controller.logIn)
router.get('/auth',auth, controller.auth)

module.exports = router;