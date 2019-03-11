// Prototype inheritance


var rabbit = {
    end: "zzz",
   // __proto__: rabbit
};

var Animal = {
    start: "aca",
    __proto__ : rabbit
};





// console.log(Animal.__proto__.end)
// console.log(rabbit.__proto__.start)
// console.log(rabbit.end)



// console.log("asdfasf")
// rabbit = {
//     jumps:true
// }

// Animal = {
//     a:false
// }

// rabbit.__proto__ = Animal
// Animal.__proto__ = rabbit
// console.log(rabbit.__proto__)


// String.__proto__ = true

// Animal.__proto__ = null;
// console.log(Animal.__proto__.end)


// Animal.__proto__.check = "I am the check";
// console.log(Animal.__proto__)
// console.log(Animal.__proto__.end)


let user = {
    name: "John",
    surname: "Smith",

    set fullname(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullname() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin : true
};

console.log(admin.fullname);

alert(admin.fullname = "Piercy Jackson")