var http = require('http')
var fs = require('fs');


var config = JSON.parse(fs.readFileSync('conf/config.json'));
console.log(''+config)

var SERVER_PORT = config.port;

    
var server = http.createServer(function(request, response){
    console.log(request.url);
    
    if(request.url === '/testjson'){
        var obj = {success: true}
        var str = JSON.stringify(obj)
//        response.setContentType('application/json')
        response.setHeader("Content-Type", "application/json");
        response.end(str)
    }
    else{
       var filePath = 'public' + request.url;
    
        fs.readFile(filePath, function(error, content){
            console.log('' + content)
            response.end('' + content);
        })
     
    }
    
    
    
})


server.listen(SERVER_PORT, function(){
    console.log('Server is listening on port ' + SERVER_PORT)
});


