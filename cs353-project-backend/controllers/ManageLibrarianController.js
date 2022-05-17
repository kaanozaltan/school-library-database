"use strict";

let connection = require("../database");

const formatDate = (date) => {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};

module.exports = class ManageLibrarianController {
    async RegisterLibraryItem(req, res) {
        let {
            libraryItemType,
            title,
            publish_year,
            publish_date,
            language,
            publisher,
            description,
            volume,
            issue,
            edition,
            print_location,
            call_no,
            authors,
        } = req.body;
        console.log(req.body);

        let maxCatalogId;
        let maxCatalogIdSql =
            "SELECT * FROM library_item ORDER BY catalog_id DESC LIMIT 0, 1";
        connection.query(maxCatalogIdSql, (err, results) => {
            console.log(results);
            if (results.length == 0) {
                maxCatalogId = 1;
            } else {
                maxCatalogId = results[0].catalog_id + 1;
            }

            if (libraryItemType == "BOOK") {
                let sql =
                    "INSERT into library_item VALUES( " +
                    maxCatalogId +
                    ",'" +
                    title +
                    "', '" +
                    call_no +
                    "', '" +
                    publish_date +
                    "', '" +
                    publish_year +
                    "' , " +
                    1 +
                    ", '" +
                    language +
                    "' , '" +
                    libraryItemType +
                    "' , '" +
                    publisher +
                    "' , '" +
                    description +
                    "' , '" +
                    authors +
                    "')";

                connection.query(sql, (err, results) => {
                    console.log(err);
                    // console.log(results);
                    if (err) {
                        console.log(err);
                        return;
                    }
                    let sql2 =
                        "INSERT INTO book VALUES ( '" +
                        maxCatalogId +
                        "','" +
                        edition +
                        "' ,'" +
                        print_location +
                        "' )";
                    connection.query(sql2, (err, results) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        // console.log(results);
                        res.json({
                            msg:
                                "Succesfully created the library item with id " +
                                maxCatalogId,
                        });
                    });
                });
            } else if (libraryItemType == "JOURNAL") {
                let sql =
                    "INSERT into library_item VALUES( " +
                    maxCatalogId +
                    ",'" +
                    title +
                    "', '" +
                    call_no +
                    "', '" +
                    publish_date +
                    "', '" +
                    publish_year +
                    "' , " +
                    1 +
                    ", '" +
                    language +
                    "' , '" +
                    libraryItemType +
                    "' , '" +
                    publisher +
                    "' , '" +
                    description +
                    "' , '" +
                    authors +
                    "')";

                connection.query(sql, (err, results) => {
                    console.log(err);
                    // console.log(results);
                    if (err) {
                        console.log(err);
                        return;
                    }
                    let sql2 =
                        "INSERT INTO journal VALUES ( '" +
                        maxCatalogId +
                        "','" +
                        volume +
                        "' ,'" +
                        issue +
                        "' )";
                    connection.query(sql2, (err, results) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        // console.log(results);
                        res.json({
                            msg:
                                "Succesfully created the library item with id " +
                                maxCatalogId,
                        });
                    });
                });
            }
        });
    }

    async WarnUser(req, res) {
        let { catalog_id, student_user_id, librarian_user_id, description } =
            req.body;
        console.log(req.body);
        let sql =
            "SELECT is_available from library_item where catalog_id=" +
            catalog_id;
        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                res.json({
                    msg: "Error!",
                });
                return;
            }
            if (results.length >= 0) {
                let maxOperationId;
                let maxOperationSql =
                    "SELECT operation_id FROM operation ORDER BY operation_id DESC LIMIT 0, 1";
                connection.query(maxOperationSql, (err, results) => {
                    if (err) {
                        console.log(err);
                        res.json({ msg: "Error!" });
                        return;
                    }
                    if (results.length == 0) {
                        maxOperationId = 1;
                    } else {
                        maxOperationId = results[0].operation_id + 1;
                    }
                    let date = formatDate(Date.now());
                    let insertOperationSql =
                        "INSERT INTO operation VALUES ( " +
                        maxOperationId +
                        ", '" +
                        date +
                        "'  )";
                    connection.query(insertOperationSql, (err, results) => {
                        if (err) {
                            console.log(err);
                            res.json({ msg: "Error!" });
                            return;
                        }
                        let insertIntoMakeOperationSQL =
                            "INSERT INTO make_operation VALUES ( " +
                            maxOperationId +
                            ", " +
                            librarian_user_id +
                            ")";
                        connection.query(
                            insertIntoMakeOperationSQL,
                            (err, results) => {
                                if (err) {
                                    console.log(err);
                                    res.json({ msg: "Error!" });
                                    return;
                                }
                                let insertIntoWarnSQL =
                                    "INSERT INTO warn VALUES (" +
                                    catalog_id +
                                    ", " +
                                    maxOperationId +
                                    ", " +
                                    student_user_id +
                                    ",0 ,'" +
                                    description +
                                    "')";
                                connection.query(
                                    insertIntoWarnSQL,
                                    (err, results) => {
                                        if (err) {
                                            console.log(err);
                                            res.json({ msg: "Error!" });
                                            return;
                                        }
                                        res.json({
                                            msg: "Warn operation is succesful!",
                                        });
                                    }
                                );
                            }
                        );
                    });
                });
            } else {
                res.json("There is no such library item!");
            }
        });
    }

    async RemoveAWarning(req, res) {
        let { operation_id } = req.body;
        let updateWarnSQL =
            "UPDATE warn SET is_cleared=1 WHERE operation_id=" + operation_id;
        connection.query(updateWarnSQL, (err, results) => {
            if (err) {
                console.log(err);
                res.json({
                    msg: "Error!",
                });
                return;
            }
            res.json({ msg: "Removed the warning!" });
        });
    }

    async LendItem(req, res) {
        let { catalog_id, student_user_id, librarian_user_id } = req.body;
        let sql =
            "SELECT is_available from library_item where catalog_id=" +
            catalog_id;
        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                res.json({
                    msg: "Error!",
                });
                return;
            }
            if (results.length >= 0) {
                let maxOperationId;
                let maxOperationSql =
                    "SELECT operation_id FROM operation ORDER BY operation_id DESC LIMIT 0, 1";
                connection.query(maxOperationSql, (err, results) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (results.length == 0) {
                        maxOperationId = 1;
                    } else {
                        maxOperationId = results[0].operation_id + 1;
                    }
                    let date = formatDate(Date.now());
                    let insertOperationSql =
                        "INSERT INTO operation VALUES ( " +
                        maxOperationId +
                        ", '" +
                        date +
                        "'  )";
                    connection.query(insertOperationSql, (err, results) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        let insertIntoMakeOperationSQL =
                            "INSERT INTO make_operation VALUES ( " +
                            maxOperationId +
                            ", " +
                            librarian_user_id +
                            ")";
                        connection.query(
                            insertIntoMakeOperationSQL,
                            (err, results) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                let insertIntoBorrowReturnSQL =
                                    "INSERT INTO borrow_return VALUES (" +
                                    catalog_id +
                                    ", " +
                                    maxOperationId +
                                    ", " +
                                    student_user_id +
                                    ", 0)";

                                connection.query(
                                    insertIntoBorrowReturnSQL,
                                    (err, results) => {
                                        if (err) {
                                            console.log(err);
                                            res.json({ msg: "Error!" });
                                            return;
                                        } else {
                                            let updateHoldSql =
                                                "UPDATE hold SET is_cleared=1 WHERE user_id=" +
                                                student_user_id +
                                                " and catalog_id=" +
                                                catalog_id;
                                            connection.query(
                                                updateHoldSql,
                                                (err, results) => {
                                                    if (err) {
                                                        console.log(err);
                                                        res.json({
                                                            msg: "Error!",
                                                        });
                                                        return;
                                                    }

                                                    let updateLibraryItem =
                                                        "UPDATE library_item SET is_available = 0 WHERE catalog_id=" +
                                                        catalog_id;
                                                    connection.query(
                                                        updateLibraryItem,
                                                        (err, results) => {
                                                            if (err) {
                                                                console.log(
                                                                    err
                                                                );
                                                                res.json(err);
                                                                return;
                                                            }
                                                            res.json({
                                                                msg:
                                                                    "Successfuly lended! Operation id=" +
                                                                    maxOperationId +
                                                                    ", User-id: " +
                                                                    student_user_id,
                                                            });
                                                        }
                                                    );
                                                }
                                            );
                                        }
                                    }
                                );
                            }
                        );
                    });
                });
            }
        });
    }

    async ReturnItem(req, res) {
        let { catalog_id, student_user_id } = req.body;

        let returnItemSQL =
            "UPDATE borrow_return SET is_returned=1 where catalog_id=" +
            catalog_id +
            " and user_id=" +
            student_user_id;
        connection.query(returnItemSQL, (err, results) => {
            if (err) {
                console.log(err);
                res.json({
                    msg: "Error! Couldn't return the book!",
                });
                return;
            }
            let updateLibraryItemSQL =
                "UPDATE library_item SET is_available=1 where catalog_id=" +
                catalog_id;
            connection.query(updateLibraryItemSQL, (err, results) => {
                if (err) {
                    console.log(err);
                    res.json({
                        msg: "Error! Couldn't return the book!",
                    });
                    return;
                }
                res.json({
                    msg:
                        "Successfuly returned the library item with id " +
                        catalog_id,
                });
            });
        });
    }

    async HoldALibraryItem(req, res) {
        let { catalog_id, user_id } = req.body;
        let holdDate = new Date(Date.now());
        let holdDateStr =
            holdDate.getFullYear() +
            "-" +
            (holdDate.getMonth.length < 2 ? "0" : "") +
            holdDate.getMonth() +
            "-" +
            (holdDate.getMonth.length < 2 ? "0" : "") +
            holdDate.getDate();
        let sql =
            "INSERT INTO hold VALUES (" +
            catalog_id +
            ",'" +
            user_id +
            "', '" +
            holdDateStr +
            "', 0)";
        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                res.json({
                    msg: "Error! Couldn't hold the book! The book may be holded already.",
                });
                return;
            }
            console.log(results);
            let updateSql =
                "UPDATE library_item SET is_available=0 WHERE catalog_id=" +
                catalog_id;
            connection.query(updateSql, (err, results) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.json({ msg: "Succesfully holded!" });
            });
        });
    }

    async BringWarnings(req, res) {
        let { user_id } = req.body;
        console.log(user_id);
        //         SELECT * FROM (library_db.warn NATURAL JOIN library_db.user) CROSS JOIN library_db.library_item
        // where user_id=21902474 and library_db.warn.catalog_id=library_db.library_item.catalog_id;
        let sql =
            "SELECT *, warn.description  from user NATURAL JOIN warn NATURAL JOIN operation CROSS JOIN library_item where user_id=" +
            user_id +
            " and warn.catalog_id=library_item.catalog_id and warn.is_cleared=0";
        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                res.json(err);
                return;
            }
            console.log("warn results");
            console.log(results);
            res.json(results);
        });
    }

    async BringMyItems(req, res) {
        let { status, user_id } = req.body;
        let sql = "";
        if (status == "ON_HOLD") {
            sql =
                "SELECT catalog_id, title, date, authors, description, publish_year FROM  user NATURAL JOIN hold NATURAL JOIN library_item WHERE user_id= " +
                user_id +
                " and is_cleared=0";
            connection.query(sql, (err, results) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                    return;
                }
                let allHoldedItems = results;
                console.log(allHoldedItems);
                res.json(allHoldedItems);
            });
        } else if (status == "BORROWED") {
            sql =
                "SELECT catalog_id, title, authors, description, publish_year, type FROM  user NATURAL JOIN borrow_return NATURAL JOIN library_item WHERE user_id= " +
                user_id +
                " and is_returned=0";
            connection.query(sql, (err, results) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                    return;
                }
                let allBorrowedItems = results;
                console.log(allBorrowedItems);
                res.json(allBorrowedItems);
            });
        } else if (status == "RETURNED") {
            sql =
                "SELECT catalog_id, title, authors, description,publish_year, type FROM  user NATURAL JOIN borrow_return NATURAL JOIN library_item WHERE user_id= " +
                user_id +
                " and is_returned=1";
            connection.query(sql, (err, results) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                    return;
                }
                let allReturnedItems = results;
                console.log(allReturnedItems);
                res.json(allReturnedItems);
            });
        } else {
            res.json({
                msg: "Wrong status type! Found status type: " + status,
            });
        }
    }

    async BringAllReturnableItems(req, res) {
        let { student_user_id } = req.body;

        let sql =
            "SELECT * from library_item NATURAL JOIN borrow_return NATURAL JOIN user where is_returned=0 and user_id=" +
            student_user_id;
        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("All returnables");
            console.log(results);
            res.json(results);
        });
    }

    async BringAllAvailableAndHoldedItemsForLend(req, res) {
        let { user_id } = req.body;

        let sql = "SELECT * from library_item where is_available = 1";
        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("All availables");
            console.log(results);
            let allAvailableLibraryItems = results;
            sql =
                "SELECT * from user NATURAL JOIN hold NATURAL JOIN library_item where user_id=" +
                user_id +
                " and is_cleared=0";
            connection.query(sql, (err, results) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("HOlded books");
                console.log(user_id);
                console.log(results);
                let allItems = allAvailableLibraryItems.concat(results);
                res.json(allItems);
            });
        });
    }

    async BringAllLibraryItems(req, res) {
        let sql = "SELECT * from library_item";
        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(results);
            res.json(results);
        });
    }
    async BringAllUsers(req, res) {
        let sql = "SELECT user_id, last_name from user";
        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(results);
            res.json(results);
        });
    }

    async BringFilteredUsers(req, res) {
        let { nameFilter, idFilter } = req.body;
        nameFilter = nameFilter.replace(/\s/g, "");
        idFilter = idFilter.replace(/\s/g, "");

        let sql =
            "SELECT user_id, last_name FROM user WHERE user_id REGEXP '." +
            idFilter +
            "*|" +
            idFilter +
            ".*'" +
            " AND last_name REGEXP '." +
            nameFilter +
            "*|" +
            nameFilter +
            ".*'";

        connection.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(results);
            res.json(results);
        });

        // if (nameFilter.length != 0 && idFilter.length != 0) {
        //     let sql = "SELECT user_id";
        // } else if (nameFilter.length != 0) {
        // } else if (idFilter.length != 0) {
        // } else {
        //     let sql = "SELECT user_id, last_name from user";
        //     connection.query(sql, (err, results) => {
        //         if (err) {
        //             console.log(err);
        //             return;
        //         }
        //         console.log(results);
        //         res.json(results);
        //     });
        // }
    }
};
