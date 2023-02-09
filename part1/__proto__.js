const obj1 = {
    key1:"value1",
    key2:"value2"
}

const obj2 = Object.create(obj1)
obj2["key3"] = "value3";
console.log(obj2.key1);  //__proto__
console.log(obj2.key3);  //__proto__
// console.log(obj1.key3); //undefined


// this happended with proto

// obj2.__proto__ = obj1
console.log(obj2.__proto__);  //__proto__
