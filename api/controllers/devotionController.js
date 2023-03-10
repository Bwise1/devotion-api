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
  // Set updatedAt to the current time
  req.body.updatedAt = new Date();

  // Get the original created time
  Cdevotions.findById(req.params.devotionId, function (err, devotion) {
    if (err) res.send(err);

    // Set createdAt to the original created time
    req.body.createdAt = devotion.createdAt;

    // Update the devotion with the new fields
    Cdevotions.findOneAndUpdate(
      { _id: req.params.devotionId },
      req.body,
      { new: true },
      function (err, devotion) {
        if (err) res.send(err);
        res.json(devotion);
      }
    );
  });
  // Devotion.findOneAndUpdate(
  //   { _id: req.params.devotionId },
  //   req.body,
  //   { new: true },
  //   function (err, devotion) {
  //     if (err) res.send(err);
  //     res.json(devotion);
  //   }
  // );
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

exports.get_devotions_by_month = function (req, res) {
  const month = parseInt(req.params.month);
  console.log(month);
  const currentYear = new Date().getFullYear();

  // Calculate the start and end dates for the given month
  const startOfMonth = new Date(currentYear, month - 1, 1);
  const endOfMonth = new Date(currentYear, month, 0);

  // const pipeline = [
  //   {
  //     $match: {
  //       date: { $regex: `-${month}-` }, // match the documents for the specified month
  //     },
  //   },
  //   {
  //     $sort: {
  //       date: 1, // sort the documents by date in ascending order
  //     },
  //   },
  //   {
  //     $group: {
  //       _id: "$date", // group the documents by date
  //       devotions: { $push: "$$ROOT" }, // include a list of all the documents in that group
  //     },
  //   },
  //   {
  //     $project: {
  //       _id: 0, // exclude the _id field from the output
  //       date: "$_id", // include the date field from the _id field
  //       devotions: 1, // include the devotions field
  //     },
  //   },
  // ];
  // Cdevotions.aggregate(pipeline)
  Cdevotions.find({
    date: {
      $gte: startOfMonth.toISOString(),
      $lte: endOfMonth.toISOString(),
    },
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
