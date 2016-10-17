var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var pollsdb = require('./pollsdb')




// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/polls', function(req,res){  
    pollsdb.dbFetchAll(function(polls){
        res.json(polls)
    });
    // Some issues with this.
    
})

app.post('/polls', function(req,res){  
    // Parse the body and extract JSON
    console.log(req.body);
    pollsdb.dbInsert(req.body);
    var obj = {success:true};
    res.json(obj)
})
 
app.listen(3000)