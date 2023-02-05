var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  Devotion = require("./api/models/devotionModel"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  dotenv = require("dotenv");
var cors = require("cors");
const cookieSession = require("cookie-session");

app.use(cors());

dotenv.config();
const db = require("./api/models");
const Role = db.role;
// Connect to the MongoDB cluster
db.mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose is connected");
    initial();
  })
  .catch((e) => {
    console.log("could not connect", e);
    process.exit();
  });

//app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: "ciucf-session",
    // keys: ['key1', 'key2'],
    secret: "COOKIE_SECRET",
    httpOnly: true,
  })
);
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

require("./api/routes/devotionRoutes")(app);
require("./api/routes/authRoutes")(app);
require("./api/routes/userRoutes")(app);
app.listen(port);
console.log("ciucf devotional RESTful API server started on: " + port);

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "bible-study",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'bible-study' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
