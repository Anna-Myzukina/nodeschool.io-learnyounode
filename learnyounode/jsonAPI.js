  var http = require('http');
  var url = require('url');
  var portNumber = process.argv[2];
  http.createServer(function (req, res) {
    var urlObject = url.parse(req.url, true),
      pathname = urlObject.pathname,
      startTime = urlObject.query.iso,
      result;

    if (pathname === '/api/unixtime') {
      result = getUnixTimeStamp(startTime);
    } else if (pathname === '/api/parsetime') {
      result = getTimeObj(startTime);
    }

    if (result) {
      res.writeHead(200, {
        'Content-type': 'application/json'
      });
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }

  }).listen(portNumber)

  function getUnixTimeStamp(startTime) {
    return {
      unixtime: getTimeStamp(startTime)
    };
  }

  function getTimeStamp(startTime) {
    return Date.parse(startTime);
  }

  function getTimeObj(startTime) {
    var date = new Date(getTimeStamp(startTime));
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }



  /*var http = require('http');
  var url = require('url');

  function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }

  function unixtime (time) {
    return { 
        unixtime : time.getTime()
    }
  }

  var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var result

    if (/^\/api\/parsetime/.test(req.url)){
      result = parsetime(time);
    }else if (/^\/api\/unixtime/.test(req.url)){
      result = unixtime(time)
    }
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  server.listen(Number(process.argv[2]));*/