"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {

    // start w/ all messages for requested user
    // (ex http://localhost:8080/api/messages?user_id=1)
    // json_agg returns messages from/to the user as nested objects in the json result
    if (req.query.user_id) {

      const qryString = " \
        SELECT mt.from_id AS other_user_id, ut.first_name, ut.last_name, mt.read, ut.avatar, \
          mt.created_at, mt.content, 'touser' AS msg_dir \
        FROM messages AS mt \
        LEFT JOIN users AS ut \
          ON mt.from_id = ut.id \
        WHERE mt.to_id = ? \
        UNION ALL \
        SELECT mf.to_id AS other_user_id, uf.first_name, uf.last_name, mf.read, uf.avatar, \
          mf.created_at, mf.content, 'fromuser' AS msgdir \
        FROM messages AS mf \
        LEFT JOIN users AS uf \
          ON mf.to_id = uf.id \
        WHERE mf.from_id = ? \
        ORDER BY created_at "

      const qry = knex
        .raw(qryString, [req.query.user_id, req.query.user_id])

      console.log(qry.toString())

      qry.then((results) => {
        res.json(results.rows);
      });

    } else {
      res.json();
    }

  });

  router.post("/", (req, res) => {

    // can test with curl as below:
    // curl --request POST --data  '{"from_id":2, "to_id":8, "content":"zzz"}' http://localhost:8080/api/messages --header "Content-Type: application/json"

    if(req.body.from_id && req.body.to_id && req.body.content) {

      const insertMessage = {
        from_id: req.body.from_id,
        to_id: req.body.to_id,
        content: req.body.content,
        read: false,
        created_at: new Date(),
        updated_at: new Date()
      }
      knex("messages")
        .insert(insertMessage)
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
