const Sequelize = require('sequelize');


class Product extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id: {
                type: Sequelize.INTEGER,
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
            description:{
                type: Sequelize.TEXT,
                allowNull : false,
            },
            price:{
                type: Sequelize.FLOAT,
                allowNull : false,
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
            modelName : "Product",
            tableName : "products",
            paranoid : false,
            collate : "utf8_general_ci",
            charset : "utf8",
        })
    }

    static associate(db){
        db.Product.hasMany(db.Cart, {foreignKey: 'product_id', sourcKey : "id"});
    }

}

module.exports = Product;