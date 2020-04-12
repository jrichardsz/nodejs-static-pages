var express = require('express');
var app = express();

// set the port of our application
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname+"/web"));

// set the home page route
app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(port, function() {
    console.log('Our app is running on ' + port);
});
