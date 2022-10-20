var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require("mongoose"),
  Devotion = require("./api/models/devotionModel"),
  bodyParser = require("body-parser"),
  //cors = require('cors'),
  dotenv = require("dotenv");
var cors = require("cors");

app.use(cors());

dotenv.config();

mongoose.Promise = global.Promise;
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}

//app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

var routes = require("./api/routes/devotionRoutes");
routes(app);
app.listen(port);
console.log("ciucf devotional RESTful API server started on: " + port);
