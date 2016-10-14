//Driver to MongoDB
var mongo = require('mongodb');


var host = "127.0.0.1";
var port = 27017;

//Configuration instruction to DB
var db = new mongo.Db("niitdb", new mongo.Server(host, port, {safe: true}));

//Open a connection to DB
db.open(function (error) {
    console.log("We are connected!" + host + ":" + port);

    //insert statement
    
    db.collection("user", function (error, collection) {
        console.log("We have the collection");
        console.log(error);
        collection.insert({
            _id: "321",
            name: "Priya",
            twitter: "priya",
            email: "priya@gmail.com",
            addresses: [
                {address: "New Delhi"}, {address: "Hyderabad"}
            ]

        }, function () {
            console.log("Successfully inserted Puneet");
        });
       
    });
});

