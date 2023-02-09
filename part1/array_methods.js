// foreach
// map

// const numbers = [4,2,5,8];

// function help(numbers,index){
//     numbers.forEach(element => {
//         console.log(element*2);
//     });
// }
// function myFunc(number,index){
//     console.log(`index is ${index} number is ${number}`);

// }
// // help(numbers,0);
// numbers.forEach(myFunc);

// Map method  very very IMP

// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber)

// squareNumber.forEach(element => {
//     console.log(element);
// });

// Filter method:-

// const numbers = [1,3,2,6,5,8]

// function  isEven(number){
//     return number%2===0;
// }
// const even = function(number){
//     return number%2===0;
// }

// const odd = function(number){
//     return number%2 != 0;
// }

// const isEven = numbers.filter(even);
// console.log(isEven);
// const isOdd = numbers.filter(odd);
// console.log(isOdd);


// Reduce:-
// const numbers = [1,3,2,6,5,8];

// const func = function(){

// }



// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },100);
// initial value = 100

// console.log(sum);


// const userCart = [
//     {productId:1, productName:"First",price:12000},
//     {productId:2, productName:"Second",price:11567},
//     {productId:3, productName:"Third",price:14567}
        
// ]

// const total = userCart.reduce((totalPrice,currentProduct)=>{
//     return totalPrice + currentProduct.price;
// },0);

// console.log(total);

// Sort Method:-

// const numbers = [5,9,1200,400,9,3000];

// numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbers); 
// Price low to high

// const products = [
//     {productId:1, productName:"First",price:300},
//     {productId:2, productName:"Second",price:3000},
//     {productId:3, productName:"Third",price:200},
//     {productId:4, productName:"Fourth",price:8000},
//     {productId:5, productName:"Fifth",price:80},
//     {productId:6, productName:"Sixth",price:500}

// ]

// products.sort((a,b)=>{
//     return a.price-b.price;
// });

// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// });
// console.log(lowToHigh)

// const highToLow = products.slice(0).sort((a,b)=>{
//     return b.price-a.price;
// });
// console.log(highToLow)


// find Method

// const myArray = ["Hello","cat","dog","Lion"];

// const ans = myArray.find((string)=>{
//     return string.length===3;
// })
// console.log(ans)



// every method

// const numbers = [2,4,6,8,10];
// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);

// const numbers = [2,4,6,12,8,10];
// const ans = numbers.some((number)=>number%2!=0);
// console.log(ans);

// fill method
// const myArray = new Array(10).fill(-1);
// console.log(myArray);
// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5);
// console.log(myArray)



// splice Method
const myArray = ["Item1","Item2","Item3"];
// delete
// myArray.splice(1,1); //delete one element at 1 index
// myArray.splice(1,0,'Inserted Item') //inserting element
const deleted = myArray.splice(1,2,"Inserted item1","inserted item2");
console.log(myArray);
console.log(deleted);
