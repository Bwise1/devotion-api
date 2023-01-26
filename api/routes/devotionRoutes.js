"use strict";
module.exports = function (app) {
  var devotionList = require("../controllers/devotionController");

  //devotion routes
  app
    .route("api/devotions")
    .get(devotionList.list_all_devotions)
    .post(devotionList.create_a_devotion);

  app
    .route("api/devotions/:devotionId")
    .get(devotionList.read_a_devotion)
    .put(devotionList.update_a_devotion)
    .delete(devotionList.delete_a_devotion);
};
