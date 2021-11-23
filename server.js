var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;
app.listen(port);
console.log('ciucf devotional RESTful API server started on: '+ port);