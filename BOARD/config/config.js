const dot = require("dotenv").config();

const env = process.env;

const config = {
  development : {
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE,
    host: env.DATABASE_HOST,
    dialect: "mysql"
  },
};

module.exports = config;

