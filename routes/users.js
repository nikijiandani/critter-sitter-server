"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {

    // start w/ all users (ex http://localhost:8080/api/users)
    let qry = knex
        .select("u.id, u.first_name", "u.last_name", "u.email", "u.phone_number", "u.avatar",
          "u.postal_code", "u.street_address", "u.city", "u.home_coords")
        .from("users AS u")

    // return single user (ex http://localhost:8080/api/users?id=8)
    if (req.query.id) {
      qry.where({'u.id': req.query.id})
    }

    // return users with specified role (ex http://localhost:8080/api/users?role=1)
    // 1=sitter, 2=customer
    if (req.query.role) {
      qry.where({'u.role': req.query.role})
    }

    console.log(qry.toString())

    qry.then((results) => {
        res.json(results);
    });
  });

  return router;
}
