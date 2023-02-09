// We are gonna learn asynchronous synchronous programming.


// setTimeout
// console.log("Script Start");

// function hello(){
//     console.log("Hello world");
// }
// setTimeout(hello,1000);
// console.log("Script End");


// console.log("Script Start");

// function hello(){
//     console.log("Hello world");
// }
// setTimeout(hello,0);
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");
// console.log("Script End");



// console.log("Script Start");

// function hello(){
//     console.log("Hello world");
// }
// const id = setTimeout(hello,1);
// console.log("settling id:",id);
// clearTimeout(id);
// console.log("Script End");
// Hello world print hi nahi hota isme lol



// Now let's learn setInterval;;


console.log("Script Starts");
setInterval(()=>{
    console.log(Math.random());
},1000)
console.log("Script Ends");
