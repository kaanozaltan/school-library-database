let connection = require("../database");

console.log("CREATE ALL TABLES JS");
let createTables = {
    createLibraryItemTable:
        "CREATE TABLE if not exists library_item(    catalog_id int,    title varchar(128),    call_no varchar(128),    publish_date date,    publish_year int,    is_available boolean,    language varchar(64),    type varchar(64),    publisher varchar(64),    description varchar(256),  authors varchar(128),   PRIMARY KEY (catalog_id));",
    createGenreTable:
        "CREATE TABLE if not exists genre(    genre_name varchar(64),    PRIMARY KEY (genre_name));",
    createBelongsTable:
        "CREATE TABLE if not exists belongs(    catalog_id int,    genre_name varchar(64),    PRIMARY KEY (catalog_id, genre_name),    FOREIGN KEY(catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY(genre_name) REFERENCES genre(genre_name) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createBookTable:
        "CREATE TABLE if not exists book(    catalog_id int,    edition int,    print_location varchar(64),    PRIMARY KEY (catalog_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createJournalTable:
        "CREATE TABLE if not exists journal(    catalog_id int,    volume int,    issue int,    PRIMARY KEY (catalog_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createUserTable:
        "CREATE TABLE if not exists user(    user_id int,    username varchar(64) NOT NULL,    first_name varchar(64) NOT NULL,    last_name varchar(64) NOT NULL,    hashed_password varchar(64) NOT NULL,    status boolean,    cell_phone varchar(12),    email varchar(64),    PRIMARY KEY (user_id));",
    createInstructorTable:
        "CREATE TABLE if not exists instructor(    user_id int,    dept varchar(64),    office_room varchar(64),    PRIMARY KEY (user_id),    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createStudentTable:
        "CREATE TABLE if not exists student(    user_id int,    dept varchar(32),    is_grad boolean,    PRIMARY KEY (user_id),    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createLibrarianTable:
        "CREATE TABLE if not exists librarian(    user_id int,    working_library varchar(64),    PRIMARY KEY (user_id),    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createOperetionTable:
        "CREATE TABLE if not exists operation(    operation_id int,    date date,    user_id int,    PRIMARY KEY (operation_id),    FOREIGN KEY (user_id) REFERENCES librarian(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createHoldTable:
        "CREATE TABLE if not exists hold(    catalog_id int,    user_id int,    date date,    is_cleared boolean,    PRIMARY KEY (catalog_id, user_id, date),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createBorrowReturnTable:
        "CREATE TABLE if not exists borrow_return(    catalog_id int,    operation_id int,    user_id int,    is_returned boolean,    PRIMARY KEY (catalog_id, operation_id, user_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (operation_id) REFERENCES operation(operation_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
    createWarnTable:
        "CREATE TABLE if not exists warn(    catalog_id int,    operation_id int,    user_id int,    is_cleared boolean,    description varchar(256),    PRIMARY KEY (catalog_id, operation_id, user_id),    FOREIGN KEY (catalog_id) REFERENCES library_item(catalog_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (operation_id) REFERENCES operation(operation_id) ON UPDATE CASCADE ON DELETE RESTRICT,    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE RESTRICT);",
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
        console.log("run");
        console.log(key, err);
    });
});

console.log("\n\n\n\n ALL TABLES ARE ADDED \n\n\n\n");
