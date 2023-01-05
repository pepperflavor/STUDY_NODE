const express = require('express');

const bodyParser = require('body-parser')
const path = require('path');

const { sequelize } = require('./models/index');
const router = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended : false }));
//app.use(express.static(path.join(__dirname,)))

app.use(express.urlencoded({ extended : false }));
app.use(router)


// 에러 예외처리 미들웨어
app.use((error,req,res,next)=>{
    res.send('ERROR')
  })

sequelize.sync({ force : false}).then(async () =>{
    console.log('DB 연결 성공!');
}).catch((err) =>{
    console.log(err);
});

app.listen(3000, () =>{
    console.log(" 서버 열림 ");
});
