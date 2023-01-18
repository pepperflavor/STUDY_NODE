const JWT = require('./jwt')
const crypto = require("crypto")

describe("lib/JWT.js", () =>{
    let jwt
    it('constructor', ()=>{
        expect(typeof JWT).toBe("function") // JS에서는 클래수도 함수니까!
        jwt = new JWT({ crypto }) // crypto를  객체분해해서 인자로 넣어줬으니까 결과값이 {crypto: {...}} 가 기대하는 결과값
        expect(typeof jwt.crypto).toBe("object") // 처음에 에러뜸, 생성자 함수를 구현안했기 때문
    })

    it("encode",()=>{
        expect(typeof jwt.encode).toBe("function")
        const value = {foo: "bar"}
        const base64 = jwt.encode(value) // 리턴이 없으면 undefined가 뜨기때문에 에러남
        expect(base64).toBe("eyJmb28iOiJiYXIifQ") // encode()의 리턴값이 base64로 인코딩된 값이길 원함
    })
})