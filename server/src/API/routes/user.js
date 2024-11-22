const express = require('express')
const {login} = require('../../handlers/user/login')
const {deleteAccount} = require('../../handlers/user/delete')
const {signup} = require('../../handlers/user/signup')
const authMiddleware = require('../../middlewares/auth')
const router = express.Router()

router.route('/login').post(login)
router.route('/signup').post(signup)
router.route('/delete').post(authMiddleware,deleteAccount)

module.exports = router