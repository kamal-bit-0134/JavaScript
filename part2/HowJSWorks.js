


// How JavaScript works

// console.log(this);
// console.log(window);
// console.log(firstName);
// console.log(typeof firstName);
// console.log(typeof secOndName);

// console.log(myFunction)

// function myFunction(){
//     console.log("this is");

// }

// var firstName = "Harshit";
// console.log(firstName);

// Hoisting

// console.log(this);
// console.log(window);
// console.log(firstName);
// console.log(myFunction) //here is hoisting

// function myFunction(){
//     console.log("this is");

// }

// var firstName = "Harshit";
// console.log(firstName);

// lets try function expression

// console.log(myFunction);
// var myFunction = function(){
//     console.log("This is")
// }
// console.log(myFunction);

// other stuff
// const lastName = "Vashishtha";
// const printName = function(){
//     const firstName = "harshit";
//     console.log(firstName);
//     console.log(lastName);
// }
// printName()


// Other stuff
const lastName = "Vashishtha";
const printName = function(){
    const firstName = "harshit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName()