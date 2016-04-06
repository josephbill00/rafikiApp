var express = require ("express");
var app = express();
var mongojs = require('mongojs'); 
var db = mongojs('students', ['students']);
// testing if server is running
// app.get('/', function (req, res){

//  res.send("hello world ")

// });
app.use(express.static(__dirname + "/public"));
//getting the dummy data 
app.get('/register', function (req, res){
  
console.log("i received a GET request")
db.students.find(function(err, docs){

     console.log(docs);
     res.json(docs);

});

 });

app.listen (3000);
console.log("server is running on port 3000");