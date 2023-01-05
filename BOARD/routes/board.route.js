const express = require('express');
const path = require('path');
const router = express.Router()

// exports한 controller 갖고오기
const {controller} = require('../modules/board.module');


//router.get('/board/:boardId', boardController.)

router.get('/', (req, res, next) => controller.getBoards(req, res, next))
router.get('/board/:boardId', (req, res, next) => controller.getBoard(req, res, next))

router.post('/board/add-board', (req, res, next) => controller.addBoard(req, res, next))

module.exports = router
