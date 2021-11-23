var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    mongoose = require('mongoose'),
    Devotion = require('./api/models/devotionModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://libradish:ndiaboskibahoshe@ciucf-devotion.huthz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/devotionRoutes');
routes(app);
app.listen(port);
console.log('ciucf devotional RESTful API server started on: '+ port);