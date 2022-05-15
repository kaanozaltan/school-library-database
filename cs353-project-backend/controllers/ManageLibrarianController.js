"use strict";
let connection = require("../database");

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
                    authorscl +
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
