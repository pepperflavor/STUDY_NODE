const crypto = require('crypto')

class JWT{
    constructor({crypto}){
        this.crypto = crypto;
    }

    encode(obj){
        // const buf = Buffer.from(JSON.stringify(obj)).toString("base64").replace(/[=]/g, ""); // buffer.from()의 매개변수는 string이어야 함
        return Buffer.from(JSON.stringify(obj)).toString("base64").replace(/[=]/g, "")
    }

}

module.exports = JWT