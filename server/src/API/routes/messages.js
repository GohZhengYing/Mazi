const express = require('express')
const { sendMessages } = require('../../handlers/messages/sendMessages')
const authMiddleware = require('../../middlewares/auth')

const router = express.Router()

router.route('/').post(authMiddleware,sendMessages)

module.exports = router