class UserService{
    constructor({userRepository, jwt}){
        this.userRepository = userRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    async signup({ userid, userpw, username}){
        try {
            if(!userid || !userpw || !username) throw '내용이없음!!'
            const hash = this.crypto.creatHmac("sha256", "hajin1122").update(userpw).digest('hex')
            const user = await this.userRepository.addUser({userid, userpw: hash, username})
            return user
        } catch (e) {
            throw new Error(e)
        }
    }


    // userid가 아니라 토큰값을 받아다가 여기 던져줘야함
    async profile(token){
        try {
            // 토큰 모양 => header + . + payload == 서명
            // 토큰을 받으면 검증을 하고, payload가 변질되지 않았는지 확인후 꺼내 써야한다.
            //const payload = this.jwt.verify(token, 'hajin1122') // payload 값이 뽑힌다.
            const {userid} = this.jwt.verify(token, 'hajin1122')
            const user = await this.userRepository.getuserById(userid) // 여기에 유저값이 뽑힌다는 건 검증이 완료됐다는 뜻
            return user
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = UserService