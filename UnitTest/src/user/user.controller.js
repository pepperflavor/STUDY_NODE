class UserController{
    constructor({userService}){
        this.userService = userService;
    }

    async postSignup(req, res, next){
        try {            
            const {userid, userpw, username} = req.body;
            const user = await this.userService.signup({userid, userpw, username})
            res.status(201).json(user)
        } catch (e) {
            next(e)
        }
    }

    async getMe(req, res, next){
        try {
            // 토큰값을 뽑아와야한다. 즉 header에서 뽑아와야한다는 뜻
            if(!req.headers.authorization) throw new Error('Authorization 없음!!!') // 헤더에 인증 속성이 없을시 예외처리
            const [type, token] = req.header.authorization.split(' ')
            // bearer sdkfjnkvnxv 이런식으로 string 형인것을 띄어쓰기 기준으로 잘라서
            // type = bearer, token = sdkfjnkvnxv 이렇게 대입해서 담아서 쓰기
            if(type.toLowerCase() !== 'Bearer') throw new Error('Authorization type Error ')
            const user = await this.userService.me(token)
            res.json(user)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = UserController