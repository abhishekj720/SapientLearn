const http = require('http')


var server = http.createServer();
server.on('request',(req,res)=>{
    res.end('<h1>HOW ARE YOU BRO!!!!!</h1>')
})


server.listen(4000);
console.log(server.eventNames());