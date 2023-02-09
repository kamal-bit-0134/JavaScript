// iterabes
// jispe hun for of loop laga sakein
// string , array are iterable
// const firstName = "KAMAL";
// for(let char of firstName){
//     console.log(char);
// }

// array like object 
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string

// sets:-

// const numbers = new Set([1,2,3]); //Capital s
// console.log(numbers);
const numbers = new Set(); //Capital s
numbers.add(1);
numbers.add(2);
numbers.add(3);
const ans = numbers.has(1);
console.log(numbers);
console.log(ans);

for(let number of numbers){
    console.log(number);
}