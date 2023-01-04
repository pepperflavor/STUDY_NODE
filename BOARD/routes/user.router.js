const path = require('path')
const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();



router.get('/add-user', userController)