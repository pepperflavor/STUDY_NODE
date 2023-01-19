class AuthController{
    constructor({ authService }){
        this.authService = authService;
    }

    async postLogin(req, res, next){
        try {
            const {userid, userpw} = req.body; // body에서 유저의 아이디 비밀번호 뽑아오고
            // 이 값으로 토큰을 생성할 수 있는지 확인
            const token = this.authService.token({userid, userpw})
            res.json({ token })
        } catch (e) {
            throw new Error(e)
        }
    }

}

module.exports = AuthController