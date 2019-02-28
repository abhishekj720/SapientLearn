(function(){
    var obj = {name:"kiran"}
    var student = {name:"ravi"};
   
    var greeting = function(a,b,c){
        return "Welcome" + this.name + " to " + a+" "+b+" in "+c;
    }

  console.log(greeting.call(obj,"test1","test2","test3"));
    console.log(greeting.call(student,"test1","test2","test3"));
//console.log(obj)
//console.log(name)
//console.log(this.name)
   console.log(greeting.apply(obj,["kiran","fsef","efewf"]));

   let x = greeting.bind(obj,"kiran2","PVS2","test2")()
    console.log(x)

})()