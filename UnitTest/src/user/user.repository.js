class UserRepository{
    constructor({ User}){
        this.User =User;
    }

    async addUser(payload){
        try {
            const user = await this.User.create(payload, {raw: true})
            
        } catch (error) {
            
        }
    }
}

module.exports = UserRepository;