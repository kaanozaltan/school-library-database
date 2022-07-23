var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    database: "library_db",
    user: "root",
    password: "Gakkos.123",
    multipleStatements: true,
});

module.exports = connection;
