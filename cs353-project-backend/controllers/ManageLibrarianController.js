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
};
