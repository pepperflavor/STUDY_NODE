const { config } = require('dotenv');

require('dotenv').config();
const env = process.env;

  const config = {
    development :{
      username: env.MYSQL_USERNAME,
      password: env.DATABASE_PASSWORD,
      database: "myshop",
      host: "127.0.0.1",
      dialect: "mysql"
    }
  };

  // const test = {
  //   username: env.MYSQL_USERNAME,
  //   password: env.MYSQL_PASSWORD,
  //   database: "myshop",
  //   host: "127.0.0.1",
  //   dialect: "mysql"
  // };

  // const production = {
  //   username: env.MYSQL_USERNAME,
  //   password: env.MYSQL_PASSWORD,
  //   database: "myshop",
  //   host: "127.0.0.1",
  //   dialect: "mysql"
  // }

  module.exports = config;
