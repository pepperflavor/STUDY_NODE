const Sequelize = require('sequelize')

class Borad extends Sequelize.Model{
    // 생성자 함수 
    static init(sequelize){
        return super.init({ 
            post_id: {
                type : Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            title:{
                type : Sequelize.STRING(200),
                allowNull: false
            },
            content :{
                type : Sequelize.STRING(200),
                allowNull: false
            }
        }, {
            sequelize
        })
    }
    // static associate(db){
    //     db.Post.belonsTo(db.User, { foerignKey: "user_id", sourceKey: "id"})
    // }
}

module.exports = Borad;