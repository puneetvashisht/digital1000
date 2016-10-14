var fs = require('fs');

console.log('Start reading....')

/*var contents = fs.readFileSync('files/nodejs.txt')
console.log('Contents read are: ' + contents )*/

fs.readFile('files/nodejs.txt', function(err, contents){
    console.log('Contents read are: ' + contents )
})


console.log('Finished reading....');