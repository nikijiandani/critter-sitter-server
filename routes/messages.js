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
        SELECT u.first_name, \
        (SELECT json_agg(msg) FROM \
          (SELECT mt.from_id, ut.first_name, ut.last_name, mt.content, mt.read, mt.created_at \
            FROM messages AS mt \
              LEFT JOIN users AS ut \
              ON mt.from_id = ut.id \
            WHERE mt.to_id = u.id \
            ORDER BY mt.created_at DESC, ut.first_name ASC \
            ) msg \
          ) as to_me, \
          (SELECT json_agg(msg) FROM \
            (SELECT mf.to_id, uf.first_name, uf.last_name, mf.content, mf.read, mf.created_at \
            FROM messages AS mf \
              LEFT JOIN users AS uf \
              ON mf.to_id = uf.id \
            WHERE mf.from_id = u.id \
            ORDER BY mf.created_at DESC, uf.first_name ASC \
            ) msg \
          ) as from_me \
        FROM users as u \
        WHERE u.id = ?"

      const qry = knex
        .raw(qryString, [req.query.user_id])

      console.log(qry.toString())

      qry.then((results) => {
        res.json(results.rows[0]);  //Doing 0 because there will be only one User (primary key)
      });

    } else {
      res.json();
    }

  });

  return router;
}
