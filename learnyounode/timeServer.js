var net = require('net');
var port = parseInt(process.argv[2]);
 
function thistime(){
  var date = new Date(Date.now());
  var hours = "0" + date.getHours();
  var minutes = "0" + date.getMinutes();
  var year = date.getFullYear();
  var day = "0" + date.getDate();
  var month = "0" + (date.getMonth() + 1);
 
  return year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hours.substr(-2) + ':' + minutes.substr(-2) + "\n";
}
 
 
var server = net.createServer( function (socket) {
  socket.write(thistime());
  socket.end();
});
 
server.listen(port);