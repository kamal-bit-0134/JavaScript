// Understancng callback function

// function myFunc(callback){
//     console.log("Task1 chalra");
//     callback();
// }

// function myFunc2(){
//     console.log("Task2 chalra");
// }

// myFunc(myFunc2);


// Diffferent aay

// function myFunc(callback){
//     console.log("Task1 chalra");
//     callback();
// }

// // function myFunc2(){
// //     console.log("Task2 chalra");
// // }

// myFunc(()=>{
//     console.log("Task2 chalra");
// }
// );

// Another example


// function getTwoNumbersAndAdd(number1,number2,callback){
//     console.log(number1,number2);
//     callback(number1,number2)
// }

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// getTwoNumbersAndAdd(4,5,addTwoNumbers);

// Newww

// function getTwoNumbersAndAdd(number1,number2,callback){
//     if(typeof number1==="number"  && typeof number2=="number")
//     {callback(number1,number2)}
//     else{
//         console.log("Wrong data");
//     }
// }

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// getTwoNumbersAndAdd("4","5",addTwoNumbers);




