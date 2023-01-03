const express = require('express');

const bodyParser = require('body-parser')
const path = require('path');

const app = express();

app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({ extended : false }));

app.listen(3000, () =>{
    console.log(" 서버 열림 ");
});