var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    mongoose = require('mongoose'),
    Devotion = require('./api/models/devotionModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
        'mongodb+srv://libradosh:ndiaboskibahoshe@ciucf-devotion.huthz.mongodb.net/ciucf?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
// mongoose.connect('mongodb+srv://libradosh:ndiaboskibahoshe@ciucf-devotion.huthz.mongodb.net/ciucf?retryWrites=true&w=majority');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/devotionRoutes');
routes(app);
app.listen(port);
console.log('ciucf devotional RESTful API server started on: '+ port);

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// mongoose.connect(
//   "mongodb+srv://libradosh:ndiaboskibahoshe@ciucf-devotion.huthz.mongodb.net/ciucf?retryWrites=true&w=majority"
// ).then(()=>console.log("Connection Successfull"))
// .catch((err)=>{
//   console.log(err);
// });


// app.listen(8000, () => {
//   console.log("ciucf Backend server don de run");
// });