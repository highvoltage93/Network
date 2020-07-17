const express = require('express')
const router = express.Router()
const controller = require('../controllers/chat')
const auth = require('../middleware/auth')

router.post('/startDialog', auth, controller.startDialog)
router.get('/getDialogs', auth, controller.getDialogs)
router.post('/create_message/:dialogID', auth, controller.create_message)
router.get('/getMessages/:dialogID', auth, controller.getMessages)

module.exports = router;