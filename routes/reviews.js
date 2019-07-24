"use strict";

const express = require("express");
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {

    if (req.query.profile_id) {
      knex("reviews AS r")
        .select("u.first_name AS from_name", "r.from_id", "r.content", "r.rating", "r.created_at")
        .leftJoin("users AS u", "r.from_id", "=", "u.id")
        .where("to_id", "=", req.query.profile_id)
        .orderBy("created_at", "desc")
        .asCallback(function(err, results){
          if(err) {
            console.log(err);
          } else {
            res.json(results);
          }
        });
    } else {
      res.json("No user id received.");
    }

  });

  router.post("/", (req, res) => {

    // can test with curl as below:
    // curl --request POST --data  "{"from_id":2, "to_id":8, "rating":1, "content":"zzz"}" http://localhost:8080/api/reviews --header "Content-Type: application/json"

    if(req.body.from_id && req.body.to_id && req.body.content) {

      const insertReview = {
        from_id: req.body.from_id,
        to_id: req.body.to_id,
        content: req.body.content,
        created_at: new Date(),
        updated_at: new Date()
      }
      knex("reviews")
        .insert(insertReview)
        .asCallback(function(err, results){
          if(err) {
            console.log(err);
          } else {
            res.json({InsertedCount: results.rowCount});
          }
        })

    } else {
      res.json({InsertedCount: 0});

    }

  });

  return router;
}

