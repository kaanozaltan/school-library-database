let connection = require("../database");

let allTables = [
    "DROP TABLE IF EXISTS library_item",
    "DROP TABLE IF EXISTS authors",
    "DROP TABLE IF EXISTS genre",
    "DROP TABLE IF EXISTS book",
    "DROP TABLE IF EXISTS journal",
    "DROP TABLE IF EXISTS instructor",
    "DROP TABLE IF EXISTS student",
    "DROP TABLE IF EXISTS operation",
    "DROP TABLE IF EXISTS librarian",
    "DROP TABLE IF EXISTS user",
    "DROP TABLE IF EXISTS hold",
    "DROP TABLE IF EXISTS borrow_return",
    "DROP TABLE IF EXISTS warn",
    "DROP TABLE IF EXISTS set_late_fee",
    "DROP TABLE IF EXISTS teaches",
    "DROP TABLE IF EXISTS takes",
    "DROP TABLE IF EXISTS course",
    "DROP TABLE IF EXISTS assign",
    "DROP TABLE IF EXISTS belongs",
];

allTables.map(async (el) => {
    await connection.query(el, (err, results) => {
        console.log(el);
        console.log(err);
    });
});

console.log("\n\n\nALL TABLES ARE DROPPED \n\n\n\n ");
