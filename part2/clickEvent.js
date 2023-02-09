
// const allButtons = document.querySelectorAll("#one");
// console.log(allButtons)

// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons)

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this);
//     })
// }


const mainButton  = document.querySelector("button") ;
const body = document.body;
const currentColor = document.querySelector(".current-color")
function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    console.log(randomColor)
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor
})