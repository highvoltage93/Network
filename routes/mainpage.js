const express = require('express')
const router = express.Router()
const controller = require('../controllers/mainPage')

router.get('/allUsers', controller.allUsers)
router.get('/profileUser/:profileId', controller.profileUser )

module.exports = router;