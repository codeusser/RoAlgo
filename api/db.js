const mysql = require('mysql');
require('dotenv').config()

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.db_password,
    database: 'hof'
});
connection.connect()

module.exports = connection
