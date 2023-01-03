const Board = require('../models/board.model');

exports.postAddBoard = (req, res,next) =>{
    const title = req.body.title;
    const content = req.body.content;
    Board.create({
        title : title,
        content : content,
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
}

exports.getIndex = (req, res, next) =>{
    // 독스 참고
    Board.findAll().then(boards => {
        res.renser('board/index', {
            
        })

    }).catch( err => {
        console.log(err);
    });
}