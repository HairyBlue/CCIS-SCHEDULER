const mysql = require("mysql2");
const dotenv = require("dotenv")
dotenv.config();

const db = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
      }
}).promise()

module.exports = db;