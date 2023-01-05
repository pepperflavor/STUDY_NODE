const Sequelize = require('sequelize');
//console.log(Sequelize); => 클래스이다
const config = require('../config/config.js').development;

// init() 안에 넣어주기 위해서 sequelize 만듬
// 생성하고 나면 model: {} 객체가 생성된다.
// console.log(sequelize); => {...}, model :{} 
const sequelize = new Sequelize(config.database, config.username, config.password, config); // 인스턴스 생성

// 모델정의한것들 갖고오기
const User = require('./user.model');
const Borad = require('./board.model');

// 위에서 생성한  models:{} 빈 객체안에 User 클래스로 지정해둔 형태를 넣어주는 역할
User.init(sequelize); 
Borad.init(sequelize); 

const db = {};

// console.log("@@@@  ", sequelize); => models :{} 안에 models: { User: User }, 찍힌게 보임!

// db에 넣어주는 이유는 다른곳에서 꺼내쓸때 편하게 사용하려고,
db.User = User;
db.Borad = Borad;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// 하지만 js는 구조분해가 잘되어있어서 아래처럼 사용해도 된다. 
/*
  console.log({}==={}) // false

  console.log(db.User === sequelize.models.User) // ture 헠.....

  module.exports = {
    sequelize,
    Sequelize
  };


  const {models:{User}} = sequelize;
*/

// 관계형 맺어주는 함수 사용
//User.associate(db);

