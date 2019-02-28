class Student{
    constructor(a,b){
        this.firstname=a;
        this.lastname=b;
        this.age;
    }
    getFullName(){
        return this.firstname+" "+this.lastname;
    }
}

let stu = new Student("abhi","shek");
// stu.firstname='kiran'
// stu.lastname='pvs'
stu.age=20
console.log(stu.getFullName())
//console.log(stu)


class department extends Student{
    
    constructor(){
        super()
        this.dep = "cse"
        this.getFullName()
        
      
        
    }

    add(x,y){
        console.log(x+y);
    }
    add(y){
        console.log(y);
    }
    // .getFullName()
}

d = new department();
d.add(5,6)
//d.getFullName()


let m = new Map();
m.set("kiran","PVS");

m.set("Abhi","shek")
m.set("Abhi","PVS")

m.forEach((v,k)=>{
    console.log(v);
    console.log(k);
})

console.log(m.size)
m.delete("kiran")

console.log(m)

let n = new Set()
n.add("sadfn")
n.add("qwer")
n.add("qwe")
console.log(n.entries(d))




var nu = {name:"ABHI",age:21,gender:"Male"}
var {name,age}= {...nu}  //destructuring of object
console.log(name);
console.log(age)


var [g,h] = [2,3]
console.log(g)
console.log(h)
