var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/testjson', function(req,res){
    //console.log(req.body);
    
    var obj = {success:true};
    res.json(obj)
})

app.post('/testjson', function(req,res){
    
    // Parse the body and extract JSON
    console.log(req.body);
    
    var obj = {success:false};
    res.json(obj)
})
 
app.listen(3000)