// prototype in function 
// new keyword

// unction in js ae function and object both

// add your own property to function

function hello(){
    console.log("hi");
}

// console.log(hello.name);\
// hello.myOwnProperty = "Very unique value";
// console.log(hello.myOwnProperty)


// function gives free space that is object itself and called prototype

// console.log(hello.prototype);
// only functions provide prototype property

// hello.prototype.abc = "abc";

// console.log(hello.prototype.abc)

// Prototype with __proto__

// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
//     sing: function(){
//         return 'tana tana tan tan tan tana';
//     }
// }



// this code uses __proto__ to solve changes in userMethods 1000 times
// function createUset(firstName,lastName,email,age,address){
//     const user = Object.create(createUset.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     // user.firstName = firstName;
    
    

//     return user;

// }
// createUset.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years`;
// };
// createUset.prototype.is18 = function(){
//     return this.age>=18;
// };
// createUset.prototype.sing = function(){
//     return 'tana tana tan tan tan tana';
// };

// const user1 = createUset("kamal1","Yogi1","k@y",23,"A-10");
// console.log(user1)
// console.log(user1.about())

// new keyword

// function createUser(firstName,age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName,this.age);
// }

// const user1 = new createUser("Kamal",20);

// console.log(user1);
// console.log(user1.about())

// this is called a constructor function
// function createUset(firstName,lastName,email,age,address){
//     // const user = Object.create(createUset.prototype);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     // user.firstName = firstName;
    
    

//     // return user;

// }
// createUset.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years`;
// };
// createUset.prototype.is18 = function(){
//     return this.age>=18;
// };
// createUset.prototype.sing = function(){
//     return 'tana tana tan tan tan tana';
// };

// const user1 = new createUset("kamal1","Yogi1","k@y",23,"A-10");
// console.log(user1)
// console.log(user1.about())

// // print key without the prototype func
// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// Something more about prototype

// let numbers = [1,2,3];
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

function hello(){
    console.log("hello");
}

hello.prototype = []
console.log(hello.prototype)