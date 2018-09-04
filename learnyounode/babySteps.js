//console.log(process.argv);

var result = 0;
var len = process.argv.length;
for (var i = 2; i < len; i++) {
    var str = process.argv[i];
    var num = Number(str);
    result +=  num;
}

console.log(result);