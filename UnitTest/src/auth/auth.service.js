const { throwStatement } = require("babel-types")
const { createHmac } = require("crypto")

class AuthService{
    constructor({authRepository, jwt}){
        this.authRepository = authRepository
        this.jwt = jwt,
        this.crypto = jwt.crypto
    }

    // hash : 사용자가 지정한 비밀번호를 해시화(비밀번호) 한다음 그걸 받아서 DB에 저장한다. 저장된 해시값과 로그인할때 마다
    // 그 입력값을 해시화 한 해시값을 비교해서 일치하면 토큰 던져주고 아니면 거절하는 것 그래서 DB에서도 비밀번호 원래 문자열이 뭔지 모름
    // repository user 가 존재하는지.
    // return token
    async token({userid, userpw}){
        try {
            if(!userid || !userpw) throw '내용이 없더라~'
            const hash = createHmac('sha256', 'hajin1122').update(userpw).digest('hex')
            const user = await this.authRepository.etUserByInfo({userid, userpw : hash})

            // 유저가 존재하는지 안하는지
            // 존재하면 token 생성
            if(!user) return null // 또는 에러 던져주기

            // 토큰 생성해주기
            const token = this.jwt.sign(user) // user 자체가 payload가 되도록
            return token;
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = AuthService;