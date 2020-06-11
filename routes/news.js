const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const controller = require('../controllers/news')

router.get('/',  controller.getNews )

module.exports = router;