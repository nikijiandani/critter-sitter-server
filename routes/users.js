"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {

    // start w/ all users (ex http://localhost:8080/api/users)
    // json_agg returns pet types as a nested object in the json result
    let qryString = " \
      SELECT u.id AS user_id, u.first_name, u.last_name, u.email, u.phone_number, \
        u.avatar, u.postal_code, u.street_address, u.city, \
        ST_X(u.home_coords) AS home_long, ST_Y(u.home_coords) AS home_lat, \
        (SELECT json_agg(sq) FROM \
          (SELECT upt.pet_type_id, pt.name \
            FROM users_pet_types AS upt\
              INNER JOIN pet_types AS pt \
              ON upt.pet_type_id=pt.id \
            WHERE upt.user_id = u.id) sq \
          ) as sitter_pet_types, \
          (SELECT ROUND(AVG(r.rating),1) AS avg_rating \
            FROM reviews AS r \
            WHERE r.to_id = u.id \
            GROUP BY r.to_id \
          ) \
      FROM users AS u \
      WHERE 1 = 1 "

    // return single user (ex http://localhost:8080/api/users?id=8)
    if (req.query.id) {
      qryString += " AND u.id = " + req.query.id
    }

    // return users with specified role (ex http://localhost:8080/api/users?role=1)
    // 1=sitter, 2=customer
    if (req.query.role) {
      qryString += " AND u.role = " + req.query.role
    }

    let qry = knex
      .raw(qryString)

    console.log(qry.toString())

    qry.then((results) => {
        res.json(results.rows);
    });
  });

  return router;
}

