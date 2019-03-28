const exp = require('express');
const app = exp();
const fs = require('fs');
const path = require('path');
const myResponse = require('./data')
const reqPromise = require('request-promise');

const bodyParser = require('body-parser');
app.use(exp.static('./'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(exp.static('./public'));//if we use local bootstrap then need to use this; static means css and js
app.get('/',(req,res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname,'./')
    });
});
//res.json is the result that we are sending
app.post('/api/search',(req,res)=>{
    //  console.log(req.body.data);
    var walmartAPI = 'http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query='
     walmartAPI = walmartAPI + req.body.data;
    // console.log(walmartAPI);
    reqPromise(walmartAPI).then(resp=>{
        console.log(typeof resp)
        res.json(JSON.parse(resp))
        
    }).catch(err=>{
        //
    })
//     .then(res => {
// console.log(res);
//         res.json({data: JSON.parse(myResponse)})
//     })
    
    // res.json({
    //     data: myResponse
    // });
})
app.listen(3000);