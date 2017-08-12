var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();


// test data
var names = ['joe', 'sam', 'sarah', 'moe'];


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
console.log('Dir name :', __dirname);
console.log('Process :', process.env.PWD);
app.use(express.static(__dirname + '/../client'));



app.get('/api/get/names', function(request, response) {
  console.log('get request to /api/get/names');
  response.send(names);
})

app.post('/api/post/names', function(request, response) {
  console.log('post request to /api/get/names');
  var result = request.body
  console.log('request.body:', result);
  names = names.concat(result)
  response.send(names);
})








//create a database named myapp
mongoose.connect('mongodb://localhost/myapp',{
  useMongoClient: true
});

var Schema = mongoose.Schema;

//Create the schema for our table
var userSchema = new Schema({
  name:  String,
});

//Create table with name User
var User = mongoose.model('mango', userSchema);
//Add row in User table
User.create({name :'sparrow'});


var User = mongoose.model('cherrs', userSchema);
//Add row in User table
User.create({name :'sparrow'});

// find info from table
User.find({}, function(err, result){
  if(err){
    console.log(err);
    return err;
  }
  if (result) {
    console.log('result : ',result[0].name);

  }

});



// app.get('/', function (req, res) {
//   res.render('/index');
// });

// app.get('/', function (req, res) {
//   res.render('index');
// });

app.post('/', function (req, res) {
  console.log('This is the req body : ', req);
  res.send('Post request made');
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
