const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7777;

const db = require("./models");

const app = express();

app.use(logger("dev"));