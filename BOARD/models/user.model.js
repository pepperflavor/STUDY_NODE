const Sequelize = require('sequelize');

// creator 0 이면 일반유저, 1이면 크리에이터
class User extends Sequelize.Model{
    static init(sequelize){
        // super.init() 인스턴스 생성은 x, Model안에 init 정적 메서드를 호출해서 정적으로 갖고만 있고 그안에 객체들을 어떻게 담을 것이다 라고
        // 써두기만 한상태
        // 아직 실행을 하지 않았음 나중에 index.js에서 호출하는 이유
        return super.init({ 
            user_id: {
                type : Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nickname : {
                type : Sequelize.STRING(20),
                allowNull: false,
            },
            email :{
                type : Sequelize.STRING(20),
                allowNull: false
            },
            isCreator: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            }
        }, {
            sequelize
        })
    }

    // static associate(db){
    //     db.User.hasMany(db.Post, { foerignKey: "user_id", sourceKey: "id"})
    // }
}

module.exports = User;