// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect().top;
// console.log(info)

// Events

// Add event
// /
// btn.onclick = function(){
//     console.log("Youuu");
// } not good method

// Add eventLinstener
// function clickMe(){
//     console.log("Clicl");
// }
// btn.addEventListener("click",clickMe);


// This keyword 
const btn = document.querySelector(".btn-headline");
console.log(btn)
function clickMe(){
    console.log("Clicl");
    console.log(this)
}
btn.addEventListener("click",clickMe);
