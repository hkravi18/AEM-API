const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// TODO: Change this to the whitelisted origins (before deploying)
app.use(
  cors({
    origin: "*",
  })
);

module.exports = app;
