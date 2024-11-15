const express = require('express')
const {login} = require('../../handlers/user/login')
const {signup} = require('../../handlers/user/signup')
const router = express.Router()

router.route('/login').post(login)
router.route('/signup').post(signup)

module.exports = router