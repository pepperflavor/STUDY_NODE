const Sequelize = require('sequelize')

// creator 0이면 일반유저 1이면 크리에이터임

class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nickname:{
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            email:{
                type: Sequelize.STRING(30),
                allowNull : false,
            },
            creator:{
                type: Sequelize.TINYINT, 
                allowNull: false,
            },
            created_at : {
                type : Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW
            }
        },{
            sequelize,
            timestamps : false,
            underscored : true,
            modelName : "User",
            tableName : "users",
            paranoid : false,
            collate : "utf8_general_ci",
            charset : "utf8",
        })
    }

    static associate(db){
        db.User.hasMany(db.Cart, { foreignKey : "cart_id", sourceKey : "id"});
    }
}

module.exports = User;