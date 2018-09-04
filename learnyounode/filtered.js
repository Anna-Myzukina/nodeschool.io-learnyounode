var fs = require('fs');
var path = require('path');

var ext = process.argv[3];
var dir = process.argv[2];

fs.readdir(dir, function callback(err, list){
    if(err){
        console.log(err);
    }
    for(var i = 0; i < list.length; i++){
        var file = path.extname(list[i]);

        if(file == "."+ext){
            console.log(list[i]);
        }
    }
})



/*
var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/