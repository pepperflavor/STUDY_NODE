class boardRepository{
    constructor({ Board }){
        this.Board = Board;
    }

    async addBoard({title, content}){
        try{
        const boardData = await this.Board.create({title : title, content : content});
        return boardData;
        }catch(e){
            console.log("DB 저장하는데 오류남" + e);
            next(e);
        }
    }

    async getBoards(){
        try{
            const boards = await Board.find({}); 
            return boards;
        }catch(e){
            next(e)
        }
    }

    // 특정보드만 보기
    async getBoardById({ boardId }) {
        try {
            const boards = await this.Board.findById(boardId)
            return boards;
        } catch (e) {
            next(e)
        }
    }
}

module.exports = boardRepository;