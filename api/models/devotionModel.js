"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DevotionSchema = new Schema({
  topic: {
    type: String,
    required: "kindly enter the Devotion title",
  },
  date: {
    type: String,
    required: "kindly enter date",
  },
  bibleVerse: {
    type: String,
    required: "kindly enter the date for the devotion",
  },
  description: {
    type: String,
    required: "kindly enter the Devotion description",
  },
  memoryVerse: {
    type: String,
    required: "kindly enter the memory verse",
  },
  memoryVerseText: {
    type: String,
    required: "kindly enter the memory verse text",
  },
  prayerPoint: {
    type: String,
    required: "kindly enter the prayer point",
  },
  meditate: {
    type: String,
    required: "kindly enter the meditation",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("devotions", DevotionSchema);
