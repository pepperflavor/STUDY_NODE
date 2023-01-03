const User = require('../models/user.model');

exports.postAddUser = (req, res, next) =>{
    const nickname = req.body.nickname;
    const email = req.body.email;
    const creator = req.body.creator;
    User.create({
        nickname : nickname,
        email : email,
        creator : creator
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
}