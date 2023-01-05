// 의존성 추가 해주기

const models = require('../models');
const boardRepository = require('../repositorys/board.repository');
const boardService = require('../service/board.service');
const boardController = require('../controllers/board.controller');

const repository = new boardRepository(models)
const service = new boardService({ boardRepository : repository })
const controller = new boardController({  boardService : service })


module.exports = {
    repository,
    service,
    controller,
    models,
}