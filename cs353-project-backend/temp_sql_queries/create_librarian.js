let connection = require("../database");

let allTables = [
    "INSERT INTO user VALUES (1, 'librarian 1', 'Ege', 'Cinel', '123123123', true, '905051468882', 'librarian1@bilkent.edu.tr', 'LIBRARIAN' )",
    "INSERT INTO librarian VALUES (1, 'Center')",
];

allTables.map((el) => {
    connection.query(el, (err, results) => {
        console.log(err, results);
    });
});
