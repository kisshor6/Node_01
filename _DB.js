const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'idscuss'
});

connection.connect((error) => {
    if (error) {
        console.log(`Error found`);
    } else {
        console.log(`connected`);
    }
});

module.exports = connection;

