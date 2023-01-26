const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./userModel");
db.role = require("./roleModel");
db.devotion = require("./devotionModel");

db.ROLES = ["user", "admin", "bible-study"];

module.exports = db;
