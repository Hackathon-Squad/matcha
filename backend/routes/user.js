const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/user/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        _id: req.body.id,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        img_url: req.body.img_url,
    };

    db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(myobj);
    });
});

// get user
// update user
// get all users

module.exports = recordRoutes;