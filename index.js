// //Initiallising node modules
var express = require('express');
// var bodyParser = require('body-parser');
// // create express app
var app = express();
// var http = require('http');
// var cors = require('cors');
// var originsWhitelist = [
//     'http://localhost:4200',      // for development
//     'http://10.235.4.163:4200'
// ];
// var corsOptions = {
//     origin: function (origin, callback) {
//         var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
//         callback(null, isWhitelisted);
//     },
//     methods: ['GET', 'POST', 'PUT','OPTIONS'],
//     credentials: true,
//     optionsSuccessStatus: 200,
// }
// app.options('*', cors(corsOptions));
// app.use(cors(corsOptions));

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// //fetching database configuration from file
// var config = require('./config/config.js');

/*
mongoose is an ODM (document mapper) which maps to mongodb documents
creates mongoose object and connects it with mongoDB
*/
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect(config.mongoDB.url, {
// });

// mongoose.connection.on('error', function () {
//     console.log('Could not connect to the database.');
//     process.exit();
// });

// mongoose.connection.once('open', function () {
//     console.log("Successfully connected to the database");
// })

// var MongoClient = require('mongodb').MongoClient;

// var Long = require('mongodb').Long;
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost/Thermometer';

// MongoClient.connect(url, function(err, db) {

//     var cursor = db.collection('Datatest').find();

//     cursor.each(function(err, doc) {

//         console.log(doc);

//     });
// }); 

// app.get('/', function (req, res) {
//     res.send({ message: "Welcome to API" });

// });

require('./app/routes/ThermometerRoutes')(app);
//Create noedjs webserver
app.listen(3000, '0.0.0.0', function () {
    console.log("Server is listening on port 3000 ");
});

// app.listen(process.env.PORT);

// http.createServer(function (req, res) {
//     var username = req.headers['x-iisnode-auth_user'];
//     var authenticationType = req.headers['x-iisnode-auth_type'];
//     // ...
// }).listen(process.env.PORT);  
// app.createServer(function(req, res){
// res.end('HelloWorld');
// }).listen('1336','127.0.0.1');


// const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const bodyParser = require('body-parser');

// var config = require('./config/config.js');

// const app = express();

// const port = 8000;

// app.use(bodyParser.urlencoded({extended:true}));

// MongoClient.connect('mongodb://localhost', function (err, client) {
//   if (err) throw err;

//   var db = client.db('Thermometer');

//   db.collection('Datatest').find({}, function (findErr, result) {
//     if (findErr) throw findErr;
//     console.log(result);
//     client.close();
//   });
// }); 


// var MongoClient = require('mongodb').MongoClient,
// assert = require('assert');
// var url = 'mongodb://localhost:27017/Thermometer';
// MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) 
// {
// assert.equal(null, err);
// console.log("Successfully connected to server");
// var db = client.db('Thermometer');
// // Find some documents in our collection
// db.collection('Datatest').find({}).toArray(function(err, docs) {
// // Print the documents returned
// docs.forEach(function(doc) {
// console.log(doc);
// });
// // Close the DB
// client.close();
// });
// // Declare success
// console.log("Called find()");
//  });