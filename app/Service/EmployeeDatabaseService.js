var Regex = require("regex");
var regex= RegExp('[a-zA-Z]');

exports.FindAllThermometerData = function(){
    return new Promise(function(resolve, reject){
       
var MongoClient = require('mongodb').MongoClient;

var Long = require('mongodb').Long;

MongoClient.connect('mongodb://localhost/FloorPlanFinal5', function(err, db) {

    if(err) {
        console.log(err);
        reject({message: "Error retrieving Coordinate data  "});
    } 

    if(!db) {
        reject(404).send({message: "Error retrieving Coordinate data "});            
    }
            var collection = db.collection('testset');

            var value = Long.fromString("1424515063000");

            console.log( value );

            var cursor = collection.find();

            cursor.toArray(function(err, items) {
                resolve(items);
            });
            db.close();
        });
    });
}

    