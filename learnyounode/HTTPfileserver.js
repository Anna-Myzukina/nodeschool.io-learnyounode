var http = require('http');
var fs = require('fs');
 
var port = process.argv[2];
var filepath = process.argv[3];
 
var server = http.createServer( function (req,res){
  var src = fs.createReadStream(filepath)
  src.pipe(res);
})
 
server.listen(port);