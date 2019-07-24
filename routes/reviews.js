"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {

    //place holder
    console.log("get reviews");
    res.json("getting the reviews");

  });

  router.post("/", (req, res) => {

    // can test with curl as below:
    // curl --request POST --data  '{"from_id":2, "to_id":8, "rating":1, "content":"zzz"}' http://localhost:8080/api/reviews --header "Content-Type: application/json"

    if(req.body.from_id && req.body.to_id && req.body.content) {

      const insertReview = {
        from_id: req.body.from_id,
        to_id: req.body.to_id,
        content: req.body.content,
        created_at: new Date(),
        updated_at: new Date()
      }
      knex('reviews')
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

