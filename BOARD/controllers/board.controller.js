class boardController{
    constructor({ boardService }){
        this.boardService = boardService;
    }

    async addBoard(req, res, next){
        try{
            const { title, content } = req.body;
            const response = await this.boardService.addBoard({ title, content })
            res.status(201)
            // 요청이 성공적이었으며 
            //그 결과로 새로운 리소스가 생성되었습니다. 
            //이 응답은 일반적으로 POST 요청 또는 일부 PUT 요청 이후에 따라옵니다.
        }catch(e){
            next(e)
        }
    }
    
    async getBoards(rea, res, next){
        try{
            const boardId = req.params.boardId;
            const response = await this.boardService.getBoards(); // boards 받음
            console.log(response);
            if(response){
                res.render('/', {
                    prods: response.boards,
                    path: '/'
                })
                console.log( "보드리스트 받아왔는가",response);
            }
            res.status(200);
            // 요청이 성공적으로 되었습니다. 정보는 요청에 따른 응답으로 반환됩니다
        }catch(e){
            next(e)
        }
    }

    async getBoard(rea, res, next){
        const boardId = req.parms.boardId;
        try{
            const response = await this.boardService.getBoardById(boardId)
            res.status(200);
            // 요청이 성공적으로 되었습니다. 정보는 요청에 따른 응답으로 반환됩니다
        }catch(e){
            next(e)
        }
    }
}

module.exports = boardController;

// const Board = require('../models/board.model');

// exports.postAddBoard = (req, res,next) =>{
//     const title = req.body.title;
//     const content = req.body.content;
//     Board.create({
//         title : title,
//         content : content,
//     }).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     });
// }

// exports.getIndex = (req, res, next) =>{
//     // 독스 참고
//     Board.findAll().then(boards => {
//         res.renser('board/index', {
//         })

//     }).catch( err => {
//         console.log(err);
//     });
// }