const express = require('express')

const router = express.Router()
const { controller } = require('../user/user.module')

// const userController = require('../user/user.controller')
// for (let item of Object.getOwnPropertyNames(userController.prototype)) {
//     if (item === 'constructor') continue
//     const method = 'post'
//     const path = `/${item}`
//     router[method](path, async (req, res, next) => {
//         try {
//             console.log(req)
//             const response = await controller[item](req, req.query, req.params)
//             res.json(response)
//         } catch (e) {
//             next(e)
//         }
//     })
// }

// class를 가리키는 this로 고정해주기 위해 함수로 감싸준것이다.
router.get('/', (req, res, next) => controller.getProfile(req, res, next))
router.post('/', (req, res, next) => controller.signup(req, res, next))
router.post('/login', (req, res, next) => controller.getToken(req, res, next))

module.exports = router
