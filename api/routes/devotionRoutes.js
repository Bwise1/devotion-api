var devotionList = require("../controllers/devotionController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });
  //devotion routes
  app.get("/api/devotions", devotionList.list_all_devotions);
  app.post("/api/devotions", devotionList.create_a_devotion);

  app.get("/api/devotions/:devotionId", devotionList.read_a_devotion);
  app.patch("/api/devotions/:devotionId", devotionList.update_a_devotion);
  app.delete("/api/devotions/:devotionId", devotionList.delete_a_devotion);

  //get devotions by month
  app.get("/api/devotions/monthly/:month", devotionList.get_devotions_by_month);
};
