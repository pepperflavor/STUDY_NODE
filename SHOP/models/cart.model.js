const Sequelize = require('sequelize');

class Cart extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id: {
                type : Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title:{
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            imageURL:{
                type: Sequelize.TEXT,
                allowNull : false,
            },
        },{
            sequelize,
            timestamps: true,
            modelName: "Cart",
            tableName: "cart",
            paranoid: false,
            charset: "utf8",
            collate: "utf8_general_ci",
            freezeTableName: true, // 테이블명 복수형으로 안바뀌게 해줌
          })
    }

    static associate(db){
        // belongsTo 함수로 Product 테이블과 이 테이블 연결
        db.Cart.belongsTo(db.Product,  { foreignKey: "product_id", targetKey: "id" })
    }
}

module.exports = Cart;