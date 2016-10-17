//Driver to MongoDB
var mongo = require('mongodb');


var host = "127.0.0.1";
var port = 27017;

/*
module.exports = function(){
    console.log('Creating a module')
}
*/

//Configuration instruction to DB
var db = new mongo.Db("pollsdb", new mongo.Server(host, port, {safe: true}));

module.exports = function(obj){
//Open a connection to DB
db.open(function (error) {
    console.log("We are connected!" + host + ":" + port);

    //insert statement
    
    db.collection("poll", function (error, collection) {
        console.log("We have the collection");
        console.log(error);
        /*var obj = { question: 'Modified Question',
  choices: [ { text: 'And 1' }, { text: 'Ans 2' }, { text: 'Ans 31' } ] }*/
        console.log(obj)
        collection.insert( obj, function () {
            console.log("Successfully inserted one sample poll");
        });

        
       
    });
});
    
}

