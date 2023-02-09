// callback hell, pyramid of doom learn

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");

// setTimeout(()=>{
//     heading1.textContent = "Heading1";
//     heading1.style.color = "violet";
// },1000);

// setTimeout(()=>{
//     heading2.textContent = "Heading1";
//     heading2.style.color = "violet";
// },1000);
// yeah same time pe execute hoga order maintain nahi hoga

// setTimeout(()=>{
//     heading1.textContent = "Heading1";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Heading2";
//         heading2.style.color = "red";
//     },1000);
// },1000);


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");


// setTimeout(()=>{
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "Six";
//                         heading6.style.color = "Blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "Yellow";
//                         },2000);
//                     },2000);
//                 },2000);
//             },1000);
//         },2000);
        
//     },2000);
// },1000);

// to get rid of callback hell i mean flattenning it we use promises.



// function changeText(element,text,color,time,onSuccessCallback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }
//         }else{
//             console.log("Your element does not exist.");
//         }
        
//     },time);
// }

// changeText(heading1,"one","violet",3000,()=>{
//     changeText(heading2,"Two","green",1000);
// });



function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
        
    },time);
}

// This is calllback hell 
// Pyramid of doom
changeText(heading1,"one","green",1000,()=>{
    changeText(heading2,"two","violet",1000,()=>{
        changeText(heading3,"three","red",1000,()=>{
            changeText(heading4,"four","yellow",1000,()=>{
                changeText(heading5,"five","blue",1000,()=>{
                    changeText(heading6,"six","cyan",1000,()=>{
                        changeText(heading7,"seven","pink",1000,()=>{
                            changeText(heading8,"eight","blue",1000,()=>{
                            },()=>{
                                console.log("Fail bro. the heading you gave doesn't exist.");
                            });
                        },()=>{
                            console.log("Fail bro. the heading you gave doesn't exist.");
                        });
                    },()=>{
                        console.log("Fail bro. the heading you gave doesn't exist.");
                    });
                },()=>{
                    console.log("Fail bro. the heading you gave doesn't exist.");
                });
            },()=>{
                console.log("Fail bro. the heading you gave doesn't exist.");
            });
        },()=>{
            console.log("Fail bro. the heading you gave doesn't exist.");
        });
    },()=>{
        console.log("Fail bro. the heading you gave doesn't exist.");
    });
},()=>{
    console.log("Fail bro. the heading you gave doesn't exist.");
});

// GoTo promise now 