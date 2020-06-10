var express = require('express');
var app = new express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: true }));


app.get('/api/details', function(req, res) {
   res.send([
  {
    id : 1, 
    date : '01/01/2020', 
    description : 'description', 
    type : true, 
    amount : 1000
  },
  {
    id : 2, 
    date : '01/01/2020', 
    description : 'description 3', 
    type :false, 
    amount : 500,
  },
  {
    id : 3, 
    date : '01/01/2020', 
    description : 'description 2', 
    type :true, 
    amount : 1500
  },
]);
});

app.get('/api/details/1', function(req, res) {
   res.send(
  {
    id : 1, 
    date : '01/01/2020', 
    description : 'description', 
    type : true, 
    amount : 1000
  });
});

app.post('/api/post', function(req, res) {
	 res.send({'post-id' : 101});
});

app.listen(port, function(err) {
    if (typeof(err) === "undefined") {
        console.log("Your application is running on: " + port);
    }
});