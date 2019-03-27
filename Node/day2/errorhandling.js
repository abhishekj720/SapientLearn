var domain = require('domain');

var dom = domain.create();


try{
    throw new Error();
}
catch(ex){
    console.log(ex);
}
dom.on('error',(er)=>{
    console.log(`Error Occured at ${er.message}`);
});

dom.run(()=>{
    require('http').createServer((req,res) => {
        handleRequest(req,res);
    }).listen(4000);
});
console.log(dom);
dom.exit();
console.log(dom);