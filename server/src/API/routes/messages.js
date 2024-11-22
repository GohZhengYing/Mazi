const express = require('express')
const { sendMessages } = require('../../handlers/messages/sendMessages')
const { getMessages } = require('../../handlers/messages/getMessages')
const authMiddleware = require('../../middlewares/auth')

const router = express.Router()

router.route('/').post(authMiddleware,sendMessages).patch(authMiddleware,getMessages)
// router.route('/get').post(authMiddleware,getMessages)

module.exports = router