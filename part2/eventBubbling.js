// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// Capturing event

// child.addEventListener("click",()=>{
//     console.log("clicked on child!!!");
// },true)

// parent.addEventListener( "click",()=>{
//     console.log("clicked on parent!!!!!");
// },true)

// grandparent.addEventListener( "click",()=>{
//     console.log("clicked on grandparent!!!!");
// },true)

// document.body.addEventListener( "click",()=>{
//     console.log("clicked on document:body!!!");
// },true)

// // Bubbling
// child.addEventListener("click",()=>{
//     console.log("clicked on child");
// })

// parent.addEventListener( "click",()=>{
//     console.log("clicked on parent");
// })

// grandparent.addEventListener( "click",()=>{
//     console.log("clicked on grandparent");
// })

// document.body.addEventListener( "click",()=>{
//     console.log("clicked on document:body");
// })



// Event Delegation
const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener( "click",()=>{
    console.log("clicked on grandparent");
})