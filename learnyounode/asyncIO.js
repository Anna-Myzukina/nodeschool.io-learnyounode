//asynchronous method: fs.readFile()
var fs = require('fs');
var file = process.argv[2];

output = fs.readFile(file, function callback(err, data) { 
  if (err) {
        return console.log(err);
      }
console.log(data.toString().split('\n').length - 1);
});