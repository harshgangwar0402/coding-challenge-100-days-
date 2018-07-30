var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200);
    res.end('Hi veryone your server is running at port 8080');

});
server.listen(8080);