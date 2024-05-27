const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'logintest',
    user: 'root',
    password: 'root123'
})

module.exports = db;