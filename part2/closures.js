
// function outerFunction(){
//     // return 1;
//     function innerFunction(){
//         console.log("Hellboii");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();

// function printFullName(FirstName,lastName){
//     // return 1;
//     function printName(){
//         console.log(FirstName,lastName);

//     }
//     return printName;
// }

// const ans = printFullName("Kamal","Yogi");
// // console.log(ans);
// ans();

// another example closure 
// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();

// another example closure 
// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// function myFunction = power=>number=>number**power;
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);

// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


// 4th Example of closure
 

function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("Hey you called me.");
            counter+=1;
        }
        else{
            console.log("Mai already call ho chuka hu.")
        }
    }
}

const myFunc = func();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();