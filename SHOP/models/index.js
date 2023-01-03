// 서버에서 db를 실행했을 때 어떤 경로를 통해 어떤 파일을 불러와서 실행할지 기재되어있음

const Sequelize = require('sequelize')

const config = require("../config/config");

const User = require('./User.model');
const Product = require('./product.model');
const Cart = require('./cart.model');



const sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password, 
    config.development
    );

const db = {}

db.sequelize = sequelize;
db.User = User;
db.Cart = Cart;
db.Product = Product;

User.init(sequelize);
Cart.init(sequelize);
Product.init(sequelize);

User.associate(db);
Product.associate(db);
Cart.associate(db);

module.exports = db;

