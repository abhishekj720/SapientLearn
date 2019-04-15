

var fs = require('fs');
fs.writeFile('./myfile.txt','Hello How r u',(err,result)=>{

});

let file = fs.createWriteStream('./jumbo.txt');
for(let i=0;i<=2e6;i++){
    file.write('I am the best');
}
file.end();