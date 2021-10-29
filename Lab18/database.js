const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ex_jurassicpark',
    password: ''
});
module.exports = pool.promise();
