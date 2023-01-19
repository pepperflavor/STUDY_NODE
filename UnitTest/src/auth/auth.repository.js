class AuthRepository{
    constructor({User}){
        this.User = User;
    }

    // payload에 어떤 데이터를 넣을지는 개발자가 생각해서 정해야함
    async getUserByInfo({userid, userpw}){
        try {
            const user = await this.User.findOne({
                raw: true,
                attributes: { exclude : ["userpw"]},
                where: {
                    userid,
                    userpw,
                },
            })
        } catch (error) {
            throw new Error(e)
        }
    }
}

module.exports = AuthRepository;