// 컨트롤러에서 받은 요청

class boardService{
    constructor({ boardRepository}){
        this.boardRepository = boardRepository;
    }

    // 게시글 추가하기
    async addBoard({ title, content }){
        try{
            const board = await this.boardRepository.addBoard({title, content})
            return board;
        }catch(e){
            console.log("글 추가하기 오류남 : " + e)
            next(e);
        }
    }

    // 게시글 전체 
    async getBoards(){
        try{
            // db 에서 글전체 가져오는 요청
            const boards = await this.boardRepository.getBoards();
            return boards
        }catch(e){
            console.log("글전체 가져오기 오류남 : " + e)
            next(e);
        }
    }

    // 특정 게시물
    async getBoardById(boardId){
        try{
            const boardId = boardId;
        }catch(e){
            console.log("특정글 가져오기 오류 : " + e)
            next(e);
        }
    }
}

module.exports = boardService;