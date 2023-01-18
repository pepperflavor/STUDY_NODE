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
            
        } catch (e) {
            
        }
    }
}

module.exports = UserService