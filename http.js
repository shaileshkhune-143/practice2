var http=require('http');
http.createServer(function(req,res){
res.write("this is shailesh khune");
res.end();
}).listen(7777);
console.log("server started at 7777");