// (function(){
//    // 'use strict'
//     console.log("100");
//     let a=b=10;
//     (function(){
// console.log(a,b);
//     })(a,b);

//     console.log(a);
// })();




(function(){
//   let  a = [1,2,3,4,5,6]
//   Array.prototype.even = function(v){
//       let c = this[2]
//       console.log(v)
//       if(a%2 == 0)
//         return true;
//       else
//          return false;  
//   }
  
  //console.log(a.even(2))
  //b = []
  //console.log(b.even(6))
  //console.log(a.even(this[1]))
  //console.log([1,2]%2)
  //console.log(NaN == 0)
  var obj = new Object();
Object.prototype.testone = function(){
    console.log("I am prototype")
    
}
//console.log(obj.prototype.testone())
})();

(function(){
    function testone(){
        console.log("100000")
    }
    testone();
    var obj = new Object()
    obj.testone();
})();


