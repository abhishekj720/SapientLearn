const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('check', function(a,b){
  console.log(a,b,this,'an event occurred!');
});
myEmitter.emit('check','Sapient','NodeJS');


