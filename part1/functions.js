// console.log("Happy birthday");
// function singHBD(){
//     console.log("Happy birthday");
// }

// singHBD();
// function sum(){
//     console.log(2+4);
// }
// sum();

// function sum(a,b){
//     return a+b;
// }

// function isEven(num1){
//     if(num1%2==0){
//         return true;
//     }
//     return false;
// }

// function isEven(num1){
//     return num1%2===0;
// }

// function find(array1,target){
//     for(let i=0;i<array1.length;i++){
//         if(array1[i]===target){
//             return true;
//         }
//     }
//     return false;
// }
// const myArray = [1,0,3,32,-1];
// console.log(find(myArray,5));


// Change to function expression:-

// const singHbd = function(){
//     console.log("HBD");
// }
// // console.log(singHbd);
// singHbd();


// Arrow functions:-
// const singHBD = ()=>{
//     console.log("HBD");
// }
// singHBD();

// default func:-
// function sum(a,b=10){
//         return a+b;
//     }


// Rest Parameter:-
// function addAll(...numbers){
//     let total = 0;
//     for(let num of numbers){
//         total+=num;
//     }
//     return total;
// }
// console.log(addAll(4,5,6,7,8,9,23,54,12));

// // callback fuction:-

// function myFunc2(name){
//     // console.log(a);
//     console.log("Hello world")
//     console.log(name);

// }

// function myFunc(callback){
//     callback("kamal");
// }
// myFunc(myFunc2);


// function returning function:-

// function myFunc(){
//     return [1,2,3];
// }
// function hello(){
//     return myFunc;
// }


function myFunc(){
    function hello(){
        return "Hello world";
    }
    return hello;
}
const ans = myFunc();
// console.log(ans)
// console.log(hello())
console.log(ans());








