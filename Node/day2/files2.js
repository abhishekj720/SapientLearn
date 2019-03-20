//to change the console.log to directly call by log
log = (a)=>{
    console.log(a)
}

//the default node always consider the first parameter of callback fn as error info and second one as access info

var fs = require('fs');
// log(fs)
// fs.rmdir('./demo',(err,result)=>{

// })
// var result =5;
fs.exists('./demo',(result) => {
    if(result){
        log(result)
        log("directory already exists")
    }
    else{
        fs.mkdir('./demo',(err,result)=>{
            if(err){
                log(err);
                log('NO nO NO')
            }else{
                log(result);
                log('I am created')
            }
         });
    }
});

console.log('I am called first');

