'use strit'
var mongoose = require('mongoose'),
    Devotion = mongoose.model('Devotions');


//fetch all devotions
exports.list_all_devotions = function(req, res) {
    Devotion.find({}, function(err, devotion){
        if(err)
            res.send(err);
        res.json(devotion);
    });
};

exports.create_a_devotion = function(req, res) {
    var new_devotion = new Devotion(req.body);
    new_devotion.save(function(err, devotion){
        if(err)
            res.send(err);
        res.json(devotion);
    });
};

exports.read_a_devotion = function(req, res) {
    Devotion.findById(req.params.devotionId, function(err, devotion){
        if (err)
            res.send(err);
        res.json(task);
    });
};