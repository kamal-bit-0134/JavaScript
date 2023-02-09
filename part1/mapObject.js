
// const person = {
//     name:"kamal",
//     age:7,
//     1:"one"
// };

// console.log(person.name)
// for(let key in person){
//     console.log(typeof key)
// }

// const person = new Map();
// person.set('firstName','Kamal');
// person.set('age',7);
// person.set(1,"one");
// console.log(person)

// for(let key of person.keys()){
//     console.log(key,typeof key);
// }

// for(let iey of person){
//     console.log(Array.isArray(iey));
// }

// for(let [key,value] of person){
//     console.log(key,value);
// }

// const person = new Map([['firstName','Kamal'],["age",7]]);
// person.set('firstName','Kamal');
// person.set('age',7);
// person.set(1,"one");

const person1 = {
    id:1,
    firstName:"kamal"
}

const userInfo = new Map();
userInfo.set(person1,{age:8,gender:"male"})

// console.log(userInfo)
console.log(person1.id);
console.log(userInfo .get(person1).gender);
// console.log(person1.id);