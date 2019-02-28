'use strict'
var initValue;
initValue=10;

function counter(callback)
{
    if(initValue >0)
    {
        console.log(initValue);
        initValue--;
        callback(callback);
    }
}

function init(cb)
{
    cb(cb);
}
init(counter);