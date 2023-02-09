
const key1 = "objkeyl" ;
const key2 = "objkey2" ;

const value1 = "value1" ;
const value2 = "value2" ;

// const obj = {key1:value1,
// key2:value2};
// this doesn't work properly
// use below :-
// const obj = {[key1]:value1,[key2]:value2};
const obj ={name:"hehe"}
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);
for (let key in obj){
    console.log(key);
    // console.log(key);
}
// const person ={
//     name: "harshit",
//     age: 22,
//     hobbies: [ "guitar" ,"steeping",
//     "tistening music"]}
// const str = "email";
// const key5 = "email1";
// person[str] = "hehe";
// console.log(person)