'use strict';
module.exports = function(app) {
    var devotionList = require('../controllers/devotionController');

    //devotion routes
    app.route('/devotions')
        .get(devotionList.list_all_devotions)
        .post(devotionList.create_a_devotion);

    app.route('/devotions/:devotionId')
        .get(devotionList.read_a_devotion)
        .put(devotionList.update_a_devotion)
        .delete(devotionList.delete_a_devotion);
};