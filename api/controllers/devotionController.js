"use strict";

const db = require("../models");
const Cdevotions = db.devotion;

exports.test = (req, res) => {
  res.status(200).send("test devotions.");
};
//fetch all devotions
exports.list_all_devotions = function (req, res) {
  Cdevotions.find({}, function (err, devotion) {
    let result = devotion;
    if (err) res.send(err);
    res.json({ devotions: result });
  });
};

exports.create_a_devotion = function (req, res) {
  var new_devotion = new Cdevotions(req.body);
  Cdevotions.findOne({ date: new_devotion.date }, function (err, devotion) {
    if (!devotion) {
      new_devotion.save(function (err, devotion) {
        if (err) res.send(err);
        res.json(devotion);
      });
    } else {
      res.status(409).send({ message: "Devotion already exists" });
      //   console.log("Devotion exists");
    }
  });
  //
};

exports.read_a_devotion = function (req, res) {
  Cdevotions.findById(req.params.devotionId, function (err, devotion) {
    if (err) res.send(err);
    res.json(devotion);
  });
};

exports.update_a_devotion = function (req, res) {
  Devotion.findOneAndUpdate(
    { _id: req.params.devotionId },
    req.body,
    { new: true },
    function (err, devotion) {
      if (err) res.send(err);
      res.json(devotion);
    }
  );
};

exports.delete_a_devotion = function (req, res) {
  Cdevotions.remove(
    {
      _id: req.params.devotionId,
    },
    function (err, devotion) {
      if (err) res.send(err);
      res.json({ message: "Devotion deleted successfully" });
    }
  );
};
