// paramter destructuring 

// object
// react

const person = {
    firstName:"Kamal",
     gender:"Male"
}

// function print(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender)

// }

function print({firstName,gender}){
    console.log(firstName);
    console.log(gender)

}

print(person)