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
        (SELECT json_agg(spt) FROM \
          (SELECT upt.pet_type_id, pt.name \
            FROM users_pet_types AS upt\
              INNER JOIN pet_types AS pt \
              ON upt.pet_type_id=pt.id \
            WHERE upt.user_id = u.id) spt \
          ) as sitter_pet_types, \
        (SELECT json_agg(rev) FROM \
            (SELECT rv.from_id, ru.first_name, rv.created_at, rv.rating, rv.content \
              FROM reviews AS rv \
                INNER JOIN users AS ru \
                ON rv.from_id=ru.id \
            WHERE rv.to_id = u.id \
            ORDER BY rv.created_at DESC) rev \
        ) as reviews, \
        (SELECT json_agg(im) FROM \
          (SELECT img.image \
            FROM user_images img \
            WHERE img.user_id = u.id) im \
          ) as images, \
          (SELECT ROUND(AVG(r.rating),1) AS avg_rating \
            FROM reviews AS r \
            WHERE r.to_id = u.id \
            GROUP BY r.to_id \
          ) \
      FROM users AS u \
      WHERE 1 = 1 "

    const qryParams = []

    // returns a single user (ex http://localhost:8080/api/users?id=8)
    if (req.query.id) {
      qryString += " AND u.id = ? "
      qryParams.push(req.query.id)
    }

    // returns users with specified role (ex http://localhost:8080/api/users?role=1)
    // 1=sitter, 2=customer
    if (req.query.role) {
      qryString += " AND u.role = ? "
      qryParams.push(req.query.role)
    }

    // returns users within x metres of another user
    // (ex http://localhost:8080/api/users?dist_from_id=1&dist_metres=1000)
    // note geometry fields are being coverted to geography for ST_DWithin
    if(req.query.dist_from_id && req.query.dist_metres) {
      qryString += " AND ST_DWithin( \
        ST_MakePoint(ST_X(u.home_coords), ST_Y(u.home_coords))::geography, \
        ST_MakePoint( \
          (SELECT ST_X(ux.home_coords) FROM users AS ux WHERE ux.id = ?), \
          (SELECT ST_Y(uy.home_coords) FROM users AS uy WHERE uy.id = ?) \
        )::geography, \
        ? \
      )"
      qryParams.push(req.query.dist_from_id) // user id for longitude
      qryParams.push(req.query.dist_from_id) // user id for latitude
      qryParams.push(req.query.dist_metres) // distance from user
    }

    let qry = knex
      .raw(qryString, qryParams)

    console.log(qryParams)

    qry.then((results) => {
        res.json(results.rows);
    });
  });

  return router;
}

