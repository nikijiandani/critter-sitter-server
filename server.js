"use strict";

//use dotenv for development
// require("dotenv").config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || "development";
const express = require("express");
const app = express();

const helmet = require("helmet");
const compression = require("compression");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");
const cors = require("cors");
const bodyParser = require("body-parser");

// this must be before other app.use statements
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Seperated Routes for each Resource
const usersRoute = require("./routes/users");
const messagesRoute = require("./routes/messages");
const reviewsRoute = require("./routes/reviews");

app.use(compression());
app.use(helmet());
app.use(cors());

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// Mount all resource routes
app.use("/api/users", usersRoute(knex));
app.use("/api/messages", messagesRoute(knex));
app.use("/api/reviews", reviewsRoute(knex));

// Home page
app.get("/", (req, res) => {
  res.json({
    user: "Lighthouse Labs"
  });
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
