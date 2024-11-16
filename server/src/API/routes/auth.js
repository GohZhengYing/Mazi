const express = require('express')
const authHandler = require("../../handlers/auth")

const router = express.Router()

router.route('/').get(authHandler)

module.exports = router