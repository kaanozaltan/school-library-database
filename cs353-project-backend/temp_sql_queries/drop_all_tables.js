let connection = require("../database");

let allTables = [
    "DROP TABLE IF EXISTS assign",
    "DROP TABLE IF EXISTS belongs",
    "DROP TABLE IF EXISTS takes",
    "DROP TABLE IF EXISTS teaches",
    "DROP TABLE IF EXISTS warn",
    "DROP TABLE IF EXISTS book",
    "DROP TABLE IF EXISTS journal",
    "DROP TABLE IF EXISTS hold",
    "DROP TABLE IF EXISTS borrow_return",
    "DROP TABLE IF EXISTS make_operation",
    "DROP TABLE IF EXISTS set_late_fee",
    "DROP TABLE IF EXISTS library_item",
    "DROP TABLE IF EXISTS authors",
    "DROP TABLE IF EXISTS genre",
    "DROP TABLE IF EXISTS instructor",
    "DROP TABLE IF EXISTS student",
    "DROP TABLE IF EXISTS operation",
    "DROP TABLE IF EXISTS librarian",
    "DROP TABLE IF EXISTS user",
    "DROP TABLE IF EXISTS course",
];

const run = async (index) => {
    if (index >= allTables.length) return;
    await connection.query(allTables[index], (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(index);
        run(index + 1);
    });
};
run(0);
