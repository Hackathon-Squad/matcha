const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

// Create new user
recordRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    _id: req.body.id,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    img_url: req.body.img_url,
    discord: "",
    drinks: [],
    instagram: "",
    location: "",
    messenger: "",
    matches: [],
  };

  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(myobj);
  });
});

// Get all users
recordRoutes.route("/user/all").get(async function (req, response) {
  let db_connect = dbo.getDb();

  let data = await db_connect.collection("users").find({}).toArray();

  response.json(data);
});

// Get one user
recordRoutes.route("/user/:uuid").get(async function (req, response) {
  let db_connect = dbo.getDb();

  let data = await db_connect
    .collection("users")
    .findOne({ _id: req.params.uuid });

  response.json(data);
});

// Update user
recordRoutes.route("/user/:uuid").patch(async function (req, response) {
  let db_connect = dbo.getDb();

  let data = db_connect
    .collection("users")
    .update({ _id: req.params.uuid }, { $set: req.body });

  response.json(data);
});

// Match two users
recordRoutes.route("/user/:uuidA/:uuidB").get(async function (req, response) {
  let db_connect = dbo.getDb();

  let dataA = db_connect
    .collection("users")
    .updateOne(
      { _id: req.params.uuidA },
      { $push: { matches: req.params.uuidB } }
    );
  let dataB = db_connect
    .collection("users")
    .updateOne(
      { _id: req.params.uuidB },
      { $push: { matches: req.params.uuidA } }
    );

  response.json({ dataA, dataB });
});

module.exports = recordRoutes;
