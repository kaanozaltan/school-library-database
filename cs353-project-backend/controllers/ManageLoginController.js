"use strict";
const bcrypt = require("bcrypt");
let connection = require("../database");

module.exports = class UserSignupController {
    async Register(req, res) {
        let {
            email,
            password,
            cell_phone,
            user_id,
            userType,
            last_name,
            first_name,
            department,
            office_number,
            user_name,
            is_graduate,
        } = req.body;
        console.log(req.body);

        if (userType == "STUDENT") {
            let sql =
                "INSERT into user VALUES( " +
                user_id +
                ",'" +
                user_name +
                "', '" +
                first_name +
                "', '" +
                last_name +
                "', '" +
                password +
                "' , " +
                1 +
                ", '" +
                cell_phone +
                "' , '" +
                email +
                "','STUDENT" +
                "')";
            connection.query(sql, (err, results) => {
                // console.log(results);
                if (err) {
                    console.log(err);
                    res.json({ msg: "Error" });
                    return;
                }
                let sql2 =
                    "INSERT INTO student VALUES ( '" +
                    user_id +
                    "','" +
                    department +
                    "' ,'" +
                    (is_graduate ? 1 : 0) +
                    "' )";
                connection.query(sql2, (err, results) => {
                    console.log(err);
                    console.log(results);
                    if (err) {
                        res.json({
                            msg: "ERROR",
                        });
                        return;
                    }
                    res.json({
                        msg:
                            "Succesfully created the student with id " +
                            user_id,
                    });
                });
            });
        } else if (userType == "INSTRUCTOR") {
            let sql =
                "INSERT into user VALUES( " +
                user_id +
                ",'" +
                user_name +
                "', '" +
                first_name +
                "', '" +
                last_name +
                "', '" +
                password +
                "' , " +
                1 +
                ", '" +
                cell_phone +
                "' , '" +
                email +
                "','INSTRUCTOR" +
                "')";
            connection.query(sql, (err, results) => {
                console.log(err);
                // console.log(results);
                if (err) {
                    console.log(err);
                    res.json({ msg: "Error" });
                    return;
                }
                sql =
                    "INSERT INTO instructor VALUES ( '" +
                    user_id +
                    "','" +
                    department +
                    "' ,'" +
                    office_number +
                    "' )";
                connection.query(sql, (err, results) => {
                    console.log(err);
                    // console.log(results);
                    if (err) {
                        res.json({
                            msg: "ERROR",
                        });
                        return;
                    } else {
                        res.json({
                            msg:
                                "Succesfully create the instructor with id " +
                                user_id,
                        });
                    }
                });
            });
        }

        //console.log("REGISTERRRRR");
        //console.log(email, name, password, cell_phone, user_id);
        // let msg = "";
        // let userEmail = await User.findOne({ where: { email: email } });
        // let userID = await User.findOne({ where: { user_id: user_id } });
        // let userCellPhone = await User.findOne({
        //     where: { cell_phone: cell_phone },
        // });
        // if (userCellPhone) {
        //     msg = "User with that phone number already registered.";
        // }

        // if (userEmail) {
        //     msg = "user with that email already registered";
        // }

        // if (password.length < 6) {
        //     msg = "Password should be longer than 5";
        // }

        // console.log(userEmail, userID, userCellPhone);

        // const salt = await bcrypt.genSalt(10);
        // password = await bcrypt.hash(password, salt);

        // if (!userEmail && !userCellPhone && !userID) {
        //     User.create({
        //         name: name,
        //         user_id: user_id,
        //         password: password,
        //         email: email,
        //         cell_phone: cell_phone,
        //         hashed_password: password,
        //     })
        //         .then((user) => {})
        //         .catch((err) => {
        //             //console.log("Register Error");
        //             //console.log(err);
        //             res.status(404).send("Couldn't sign up ");
        //         });
        //     msg = "successfully registered you can go to login page now";
        // } else {
        //     //console.log("Register Error");
        //     res.status(404).send("Couldn't sign up ");
        // }
        // jwt.sign({ msg: msg }, "secretkey", (err, token) => {
        //     res.json({
        //         msg: msg,
        //     });
        // });
    }
    async Login(req, res) {
        let { id, password } = req.body;
        console.log(id, password);
        let sql = "SELECT * from user where user_id=" + id;
        connection.query(sql, (err, results) => {
            console.log(err);
            console.log(results);
            if (results.length == 0) {
                res.json({ msg: "There is no such user" });
                return;
            }
            if (results[0].hashed_password == password) {
                res.json({ user: results[0] });
            }
        });
        // let user = await User.findOne({ where: { email: email } });
        // if (!user) {
        //     //console.log("!user");
        //     return res.status(404).send("err");
        // }
        // const verified = bcrypt.compareSync(
        //     password,
        //     user.dataValues.hashed_password
        // );
        // // let verified = user.hashed_password == password;
        // //console.log("Login: ");
        // //console.log(user);
        // //console.log(user.hashed_password);
        // //console.log(password);

        // if (verified) {
        //     jwt.sign({ user: user }, "secretkey", (err, token) => {
        //         res.json({
        //             token: token,
        //             user: user,
        //         });
        //     });
        // } else {
        //     return res.status(404).send();
        // }
    }
};
