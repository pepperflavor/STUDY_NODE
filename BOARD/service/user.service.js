import User from '../models/user.model'

// repository와 상호작용

class userService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    // 받은 response 구조분해
    async singup({ nickname, email, password, creator}){
        try{
            const user = await this.userRepository.addUser({ nickname, email, password, creator});
            return user;
        }catch(e){
            alert('가입실패!');
            console.log(e)
        }
    }

    async login({ email, password}){
        try{
            const input = {
                email : email,
                password : password
            }
            // db에서 받아온 유저정보
            const user = await this.userRepository.getUser({ email, password});

            if(input.email == user.email && input.password == user.password){
                return true; // return user;
            }

        }catch (e){
            console.log(e);
        }
    }

}

module.exports = userService;