let connection = require("../database");

let allTables = [
    "INSERT INTO course VALUES (1, 'CS353')",
    "INSERT INTO course VALUES (2, 'CS319')",
    "INSERT INTO course VALUES (3, 'CS223')",
    "INSERT INTO course VALUES (4, 'CS342')",
    "INSERT INTO course VALUES (5, 'ENG401')",
    "INSERT INTO course VALUES (6, 'MATH225')",
];

allTables.map((el) => {
    connection.query(el, (err, results) => {
        console.log(err, results);
    });
});
