const express = require('express');

const bodyParser = require('body-parser')
const path = require('path');

const { sequelize } = require('./models/index')

const app = express();

app.set("views", path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended : false }));
//app.use(express.static(path.join(__dirname,)))

app.use(express.urlencoded({ extended : false }));


app.listen(3000, () =>{
    console.log(" 서버 열림 ");
});

// 에러 예외처리 미들웨어
app.use((error,req,res,next)=>{
    res.send('ERROR')
  })

sequelize.sync({ force : false}).then(async () =>{
    console.log('DB 연결 성공!');
}).catch((err) =>{
    console.log(err);
});