const user = {
    firstName:"Harshit",
    lastName:"Vashishtha",
    email:"x@y.com",
    age:2,
    address:"house no.,colony,pincode",
    about:function(){
        return `${this.firstName} is ${this.age} years`;
    },
    is18: function(){
        return this.age>=18;
    }
}

// const aboutUser = user.about();
// console.log(aboutUser)

// function( that function create object)
// add key vlaue pair
// return the object

// function createUset(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     // user.firstName = firstName;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years`;
//     }
//     user.is18 = function(){
//         return this.age>=18;
//     }

//     return user;

// }
// const user1 = createUset("kamal1","Yogi1","k@y",23,"A-10");
// console.log(user1)


// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }

// function createUset(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     // user.firstName = firstName;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
    

//     return user;

// }

// const user1 = createUset("kamal1","Yogi1","k@y",23,"A-10");
// console.log(user1)
// console.log(user1.about())


const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years`;
    },
    is18 : function(){
        return this.age>=18;
    },
    sing: function(){
        return 'tana tana tan tan tan tana';
    }
}
// this code uses __proto__ to solve changes in userMethods 1000 times
function createUset(firstName,lastName,email,age,address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.firstName = firstName;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    

    return user;

}

const user1 = createUset("kamal1","Yogi1","k@y",23,"A-10");
console.log(user1)
console.log(user1.about())