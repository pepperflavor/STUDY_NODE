const express = require('express')
const router = express.Router()
const boardRoute = require('./board.route')

router.use('/board', boardRoute)

module.exports = router;