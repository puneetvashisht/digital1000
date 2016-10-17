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


function dbFetchAll(fn){
    //Open a connection to DB
db.open(function (error) {
    console.log("We are connected!" + host + ":" + port);

    //fetch statement
    
    db.collection("poll", function (error, collection) {
        console.log("We have the collection");
        console.log(error);
        /*var obj = { question: 'Modified Question',
  choices: [ { text: 'And 1' }, { text: 'Ans 2' }, { text: 'Ans 31' } ] }*/
        //console.log(obj)
        collection.find( {}, function (error, data) {
            console.log("Successfully inserted one sample poll");
            //console.log(data);
            if(error) throw error;
            else{
                data.toArray(function(error, polls){
                    console.log(polls);
                    fn(polls)
//                    write this polls obj to the response
                })
            }
        });

        
       
    });
});
}

function dbInsert(obj){
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

module.exports.dbInsert = dbInsert
module.exports.dbFetchAll = dbFetchAll


