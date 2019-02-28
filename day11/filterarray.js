// (function(){
//     let a = [1,2,3,4,5,6]

//     var c = a.filter((x,i)=>{
//         return x%2==0
//     })

//     console.log(c)


//     var res1 = a.filter(x=>x%2==0)
    
//     console.log(res1)



//     //
//     let t=20
//     console.log(t);
//     const t=10
//     console.log(t)


//     let ab ={b:10,d:20};
//     //ab.b=12;
//     ab = {b:20,d:30};
//     console.log(ab)
// })()


(function(){
    let a = [1,2,3,4,5,6,7,8,9]

    console.log(a.filter(function(b){
        return b%2==0

    }))
})();



(function(){
    let a = [1,2,3,4,5,6,7,8,9]

    console.log(a.filter(b=>{
        return b%2==0
    }   
    ))
})();




(function(){
    let a 
    a = [1,2,3,4,5,6,7,8,9]

    console.log(a.filter(()=>{
        return a%2==0
    }   
    ))
})()