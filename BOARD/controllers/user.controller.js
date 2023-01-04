
const User = require('../models/user.model');
const { sequelize } = require('../models/index')

class userController{
    constructor({ userService }){
        this.userService = userService;
    }

    // create
    async signup(req, res, next){
        try{
            const { nickname, email, password, creator } = req.body;
            const response = await this.userService.signUp({ nickname, email, password, creator })
    
        }catch(e){
            console.log(e);
            next(e);
        }
    }
}

module.exports = userController;

// const User = require('../models/user.model');

// exports.postAddUser = (req, res, next) =>{
//     const nickname = req.body.nickname;
//     const email = req.body.email;
//     const creator = req.body.creator;
//     User.create({
//         nickname : nickname,
//         email : email,
//         creator : creator
//     }).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     });
// }

// exports.