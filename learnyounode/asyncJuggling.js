
var http = require('http');
var bl = require('bl');
 
var urls = [];
var completed = 0;
var all = [];
for(var i=2; i < process.argv.length; i++){
	urls.push(process.argv[i]);
}
 
for(i in urls){
  getdata(i);
}
 
function getdata(count){
	http.get(urls[count],function(response){
		response.pipe(bl(function(err, data){
      if(err) {
      	return console.error(err);
      	}	
      data = data.toString();
      all[count] = data;
      completed++;
      if (completed == urls.length) publish();
    }));	
	})
}
 
function publish(){
  if(completed < urls.length) return false;  for(i in all){
    console.log(all[i]);
  }
}