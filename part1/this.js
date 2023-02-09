// console.log(this);
// console.log(this===window)

// function myFunc(){
//     console.log("Hello world");
// }
// function myFunc(){
//     console.log(this);
// }

// window.myFunc();


// Call Apply Bind


// const user1 = {
//     firstName:"kamal",
//     age:8,
//     about:function(){
//         console.log(this.firstName,this.age)
//     }
// }

// const user2 = {
//     firstName:"music",
//     age:89,
    
// }

// user2.about.call(user1); gives errors
// solve
// user1.about.call(user2)

// const user1 = {
//     firstName:"kamal",
//     age:8,
//     about:function(hobby,favMus){
//         console.log(this.firstName,this.age,hobby,favMus)
//     }
// }


// const user2 = {
//     firstName:"music",
//     age:89,
    
// }
// user2.about.call(user1); //gives errors
// solve
// user1.about.call(user2,"Her","Crybaby")

function about(hobby,favMus){
    console.log(this.firstName,this.age,hobby,favMus)
}
const user1 = {
    firstName:"kamal",
    age:8,
    
}


const user2 = {
    firstName:"music",
    age:89,
    
}


// about.apply(user2,["Her","Crybaby"])
// 
// 
const func = about.bind(user2,"Her","Crybaby") 
func();