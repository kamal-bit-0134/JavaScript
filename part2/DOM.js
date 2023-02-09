// DOM -Document Object Model 

// console.log(window.document)
// console.dir(window.document)
// console.log(document)

// Select elemnt using by id:-

// document.getElementById("main-heading")
// console.log(document.getElementById("main-heading"));
// console.log(typeof document.getElementById("main-heading"));
// const main_heading = document.getElementById("main-heading");
// console.log(main_heading);

// select element using query selector


// const main_heading = document.querySelector("#main-heading");
// console.log(main_heading);

// const header = document.querySelector(".header");
// console.log(header);


// const navitem = document.querySelector(".nav-item");
// console.log(navitem);


// const navitemAll = document.querySelectorAll(".nav-item");
// console.log(navitemAll);


// Text change :- on the site by selecting elemnet from document


// const main_heading = document.getElementById("main-heading");
// console.log(main_heading);
// console.log(main_heading.textContent);
// main_heading.textContent = "This is something else";
// console.log(main_heading.textContent);

// Change style of elements

// const main_heading =  document.querySelector("div.headline h2");
// console.log(main_heading.style);
// main_heading.style.color = "blue";
// main_heading.style.backgroundColor = "blue";


// Get and Set attributes

// const link = document.querySelector("li");
// console.log(link);
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));



// Select multiple elements


// const navItems = document.getElementsByClassName("nav-item"); //HTML Collection
// console.log(navItems)

// const navItems = document.querySelectorAll(".nav-item"); //Node-List
// console.log(navItems)
// console.log(navItems[0])
// console.log(navItems[1])


// Application of multiple Elements

// const navItems = document.getElementsByClassName("nav-item"); //HTML Collection
const navItems = document.getElementsByTagName("a"); //HTML Collection

console.log(navItems)
// console.log(navItems.length)
// for(let i=0;i<navItems.length;i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";

//     navItem.style.fontWeight = "bold";

// }

for(let navItem of navItems){
    // const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";

    navItem.style.fontWeight = "bold";

}

// const navItems = document.querySelectorAll(".nav-item"); //Node-List
// console.log(navItems)
