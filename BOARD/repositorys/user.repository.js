class userRepository{
    constructor({ User }){
        this.User = User;
    }

    async addUser( inputData ){
        // 입력받은 값에서 각각 값 꺼내기 
        const { nickname, email, password, creator} = inputData;
        try{
            if(nickname && email && password && creator != null){
                await User.create({
                    nickname : nickname,
                    email : email,
                    password : password,
                    creator : creator,
                });
            }
        }catch(e){
            throw new Error(e)
        }
    }


    async getUser({ email, password}){
        try{
            const where = { email, password};
            const data = await this.User.findOne({ email : email}) //{ attributes : [ '']}

        }catch(e){

        }
    }


}