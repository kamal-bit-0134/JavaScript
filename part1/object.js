
// const person = {name: "Harshit", age:22}
const person ={
    name: "harshit",
    age: 22,
    hobbies: [ "guitar" ,"steeping",
    "tistening music"]}
// console.log(person)
// console.log(person.name)
// console.log(person["age"])
person["gender"] = "male"
// console.log(person)
const key = "email";

// person.key = "a@gmail.com"; not use key variable
person[key] = "#@"
console.log(person)

// for(let key in person){
//     console.log(key);
// }


for(let key in person){
    console.log(person[key]);
}

// console.log(Object.keys(person))
// console.log(typeof Object.keys(person))

for(let key of Object.keys(person)){
    console.log(person[key]);
}