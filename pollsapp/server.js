var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var dbInsert = require('./pollsdb')




// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/polls', function(req,res){
    
    // Parse the body and extract JSON
    console.log(req.body);
    dbInsert(req.body);
    var obj = {success:true};
    res.json(obj)
})
 
app.listen(3000)