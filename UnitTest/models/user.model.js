const Sequelize = require('sequelize')

class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            user_id:{
                type : Sequelize.INTEGER,
                allowNull: false
            },
            user_pw:{
                type : Sequelize.STRING(50),
                allowNull: false
            }
        },{
            sequelize
        })
    }
}

module.exports = User;