// Methods
// Function inside object

// const person = {
//     firstName:"kamal",
//     age:67,
//     about:function(){
//         console.log("Name is kamal and age is 67")
//     }
// }

// console.log(person.about)
// person.about()

// const person = {
//     firstName:"kamal",
//     age:67,
//     about:function(){
//         console.log(`Name is ${this.firstName} and age is ${this.age}`)
//     } 
// }

// person.about()

function personalInfo(){
    console.log(`Name is ${this.firstName} and age is ${this.age}`)
} 
const person1 = {
        firstName:"kamal",
        age:67,
        about: personalInfo
    }

const person2 = {
    firstName:"kamal1",
    age:6,
    about: personalInfo
}
const person3 = {
    firstName:"kamal2",
    age:7,
    about: personalInfo
}

person1.about()
person2.about()
person3.about()
