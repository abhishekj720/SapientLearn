Assert = {}

Assert.equal = function(callback,a,b,expect)
{
    return (callback(a,b) == expect)
}

function add(a,b)
{
    return a+b;
}

console.log(Assert.equal(add,1,2,'3'))