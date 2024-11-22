const express = require('express')
const router = express.Router()
//user routes
const {login} = require('../handlers/user/login')
const {signup} = require('../handlers/user/signup')

router.route('/login').post(login)
router.route('/signup').post(signup)

//messages routes
const { sendMessages } = require('../handlers/messages/sendMessages')
const authMiddleware = require('../middlewares/auth')

router.route('/').post(authMiddleware,sendMessages)

//contacts routes
const { fetchContacts } = require("../handlers/contacts/fetchContacts")
const { modifyContacts } = require("../handlers/contacts/modifyContacts")

router.route('/').get(authMiddleware,fetchContacts).post(authMiddleware,modifyContacts)

//auth routes
const authHandler = require("../handlers/auth")

router.route('/').get(authHandler)

module.exports = router