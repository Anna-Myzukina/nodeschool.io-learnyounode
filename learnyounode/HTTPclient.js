var http = require('http');
var urlPath = process.argv[2];
http.get(urlPath, function callback(response) {
    response.setEncoding('utf8');
    response.on('data', function(data){
        console.log(data);
    })
});



/*var http = require('http');
var url = process.argv[2].toString();
http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error);*/