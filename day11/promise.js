let v=5;
let promise = new Promise((resolve,reject)=>{
console.log("I AM SECOND")
    if(true)
    {console.log("I AM third")
        resolve(v)
    }
    else{
        reject('I am rejected')
    }
});

let promise2 = new Promise((resolve,reject)=>{
    console.log("I AM SECOND")
        if(false)
        {console.log("I AM third2")
        v=10
            resolve(v)
        }
        else{
            reject('I am rejected2')
        }
    });
// promise.then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

// Promise.all()
// v=10;
// console.log('I am firsdt')

Promise.all([promise,promise2])
.then((data)=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

//console.log(v)