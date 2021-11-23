'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DevotionSchema = new Schema({
    topic: {
        type: String,
        required: 'kindly enter the Devotion title'
    },
    date: {

    },
    bibleVerse: {
        type: Date,
        required: 'kindly enter the date for the devotion'

    },
    description: {
        type: String,
        required: 'kindly enter the Devotion title'
    },
    memoryVerse: {
        type: String,
        required: 'kindly enter the memory verse'
    },
    prayerPoint: {
        type: String,
        required: 'kindly enter the prayer point'
    },
    meditate: {
        type: String,
        required: 'kindly enter the meditation'
    },

});
module.exports = mongoose.model('Devotions', DevotionSchema);