const Sequelize = require('sequelize')

class Post extends Sequelize.Model{
    // 생성자 함수 
    static init(sequelize){
        return super.init({

        })
    }

}

module.exports = Post;