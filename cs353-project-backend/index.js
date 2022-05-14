const express = require("express");
const path = require("path");
const cors = require("cors");
const route = require("./routes/routes");
let connection = require("./database");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const createAllTables = () => {
    let createTables = {
        createLibraryItemTable:
            "CREATE TABLE if not exists library_item(    catalog_id int,    title varchar(20),    call_no int,    publish_date date,    publish_year int,    is_available boolean,    language varchar(20),    type varchar(10),    publisher varchar(20),    description varchar(50),    PRIMARY KEY (catalog_id));",
        createAuthorsTable:
            "CREATE TABLE if not exists authors(    catalog_id int,    author varchar(20),    PRIMARY KEY (catalog_id, author),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createGenreTable:
            "CREATE TABLE if not exists genre(    genre_name varchar(20),    PRIMARY KEY (genre_name));",
        createBelongsTable:
            "CREATE TABLE if not exists belongs(    catalog_id int,    genre_name varchar(20),    PRIMARY KEY (catalog_id, genre_name),    FOREIGN KEY(catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY(genre_name) REFERENCES genre(genre_name) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createBookTable:
            "CREATE TABLE if not exists book(    catalog_id int,    edition int,    print_location varchar(20),    PRIMARY KEY (catalog_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createJournalTable:
            "CREATE TABLE if not exists journal(    catalog_id int,    volume int,    issue int,    PRIMARY KEY (catalog_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createUserTable:
            "CREATE TABLE if not exists user(    user_id int,    username varchar(20) NOT NULL,    first_name varchar(20) NOT NULL,    last_name varchar(20) NOT NULL,    hashed_password varchar(20) NOT NULL,    status boolean,    cell_phone varchar(12),    email varchar(64),    PRIMARY KEY (user_id));",
        createInstructorTable:
            "CREATE TABLE if not exists instructor(    user_id int,    dept varchar(5),    office_room varchar(10),    PRIMARY KEY (user_id),    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createStudentTable:
            "CREATE TABLE if not exists student(    user_id int,    dept varchar(5),    is_grad boolean,    PRIMARY KEY (user_id),    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createLibrarianTable:
            "CREATE TABLE if not exists librarian(    user_id int,    working_library varchar(10),    PRIMARY KEY (user_id),    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createOperetionTable:
            "CREATE TABLE if not exists operation(    operation_id int,    date date,    user_id int,    PRIMARY KEY (operation_id),    FOREIGN KEY (user_id) REFERENCES librarian(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createHoldTable:
            "CREATE TABLE if not exists hold(    catalog_id int,    user_id int,    date date,    is_cleared boolean,    PRIMARY KEY (catalog_id, user_id, date),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createBorrowReturnTable:
            "CREATE TABLE if not exists borrow_return(    catalog_id int,    operation_id int,    user_id int,    is_returned boolean,    PRIMARY KEY (catalog_id, operation_id, user_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (operation_id) REFERENCES operation(operation_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createWarnTable:
            "CREATE TABLE if not exists warn(    catalog_id int,    operation_id int,    user_id int,    is_cleared boolean,    description varchar(50),    PRIMARY KEY (catalog_id, operation_id, user_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (operation_id) REFERENCES operation(operation_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createSetLateFeeTable:
            "CREATE TABLE if not exists set_late_fee(    catalog_id int,    operation_id int,    user_id int,    amount int,    date_paid date,    PRIMARY KEY (catalog_id, operation_id, user_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (operation_id) REFERENCES operation(operation_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createCourseTable:
            "CREATE TABLE if not exists course(    course_id int,    course_name varchar(20),    PRIMARY KEY (course_id));",
        createTeachesTable:
            "CREATE TABLE if not exists teaches(    course_id int,    user_id int,    PRIMARY KEY (course_id, user_id),    FOREIGN KEY (course_id) REFERENCES course(course_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createTakesTable:
            "CREATE TABLE if not exists takes(    course_id int,    user_id int,    PRIMARY KEY (course_id, user_id),    FOREIGN KEY (course_id) REFERENCES course(course_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
        createAssignTable:
            "CREATE TABLE if not exists assign(    catalog_id int,    student_user_id int,    instructor_user_id int,    PRIMARY KEY (catalog_id, student_user_id, instructor_user_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (student_user_id) REFERENCES student(user_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (instructor_user_id) REFERENCES instructor(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    };

    Object.keys(createTables).map((key, index) => {
        let sql = createTables[key];
        connection.query(sql, (err, results) => {
            // console.log(key, err);
        });
    });
};

createAllTables();

route(app);

// app.get("/", function (req, res) {
//     sql : "SELECT * FROM EMPLOYEE_INFO";
//     connection.query(sql, function (err, results) {
//         if (err) throw err;
//         res.send(results);
//     });
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
