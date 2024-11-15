const express = require('express')
const { fetchContacts } = require("../../handlers/contacts/fetchContacts")
const { modifyContacts } = require("../../handlers/contacts/modifyContacts")
const authMiddleware = require("../../middlewares/auth")

const router = express.Router()

router.route('/').get(authMiddleware,fetchContacts).post(authMiddleware,modifyContacts)

module.exports = router