// Promise
// a value that you will get in future.

// const bucket = ["coffee","chips","vegetables","salt","rice"];
// const bucket = ["coffee","chips","vegetables","rice"];

// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//         resolve("FriedRice");
//     }else{
//         reject("Not enough egetables mate.")
//     }
// })

// Produce promise



// Consume promise
// How to consume
// friedRicePromise.then((myFriedRice)=>{
//     console.log("Let's eat ",myFriedRice);
// },(error)=>{
//     console.log(error)
// })


// other method 

// friedRicePromise.then((myFriedRice)=>{
//     console.log("Let's eat ",myFriedRice);
// }).catch((error)=>{
//     console.log(error)
// })

// setTimeout(()=>{
//     console.log("Hellow from setTimeOut");
// },1000)

// for(let i=0;i<=100;i++){
//     console.log(Math.random(),i);
// }

// console.log("Script end");



// Let's return promise
// function ricePromise(){
//     const bucket = ["coffee","chips","vegetables","rice"];
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//             resolve("FriedRice");
//         }else{
//             reject("Not enough egetables mate.")
//         }
//     })
// }


// ricePromise().then((myFriedRice)=>{
//     console.log("Let's eat ",myFriedRice);
// }).catch((error)=>{
//     console.log(error)
// })


// Lets do promise and setimeout together

// function myPromise(){
    
//     return new Promise((resolve,reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         },2000)
//     })
// }
// myPromise().then(()=>{console.log("Resolved")}).catch(()=>{console.log("Reject")});




// Promise Chaining


// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("Foo");
//     })
// }

// myPromise().then((value)=>{
//     console.log(value);
//     value+="bar";
//     return value;
//     // internally acts as Promise.resolve(value)
// })
// .then((value)=>{
//     console.log(value);
// })


// Now let's solve the problem of callback hell with promises 

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
                
            }else{
                reject();
            }
            
        },time)
    })
    
}

const returnedPromise = changeText(heading1,"one","red",1000);
returnedPromise.then(()=>{
    return changeText(heading2,"two","blue",1000);
})
.then(()=>{
    return changeText(heading3,"three","cyan",1000);
})
.then(()=>{
    return changeText(heading4,"four","purple",1000);
})
.then(()=>{
    return changeText(heading5,"five","brown",1000);
})
.then(()=>{
    return changeText(heading6,"six","yellow",1000);
})
.then(()=>{
    return changeText(heading7,"seven","pink",1000);
})
.then(()=>{
    return changeText(heading8,"eight","cyan",1000);
})
