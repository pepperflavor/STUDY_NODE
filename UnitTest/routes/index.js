const { Router } = require('express')
const express = require('express')
const router = express.Router()
const users = require('../src/user/user.route')


router.use('/auth')