var fs = require('fs');
var http = require('http');
// console.log('I am running');
http.createServer((req, res)=>{
    // fs.readFile("./jumbo.txt", (err,data)=>{
    //     if(err){
    //         res.end(err);
    //     }
    //     else{
    //         res.end(data);
    //     }
    // })
    
let src = fs.createReadStream('./jumbo.txt');
// let pausedState = src.pause();
//     console.log('paused');
//    pausedState.resume();
//    pausedState.pipe(res) 
   src.pipe(res);
// pipe method : will take the data from one method and send that information to other method
}).listen(5000);
console.log('I am running');



