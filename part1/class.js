// class CreateUser{
//     constructor(firstName,lastName,email,age,address){
//         console.log("constructor called");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }   

//     about(){
//         return `${this.firstName} is ${this.age} years`;
//     }
//     is18 (){
//         return this.age>=18;
//     }
//     sing(){
//         return 'tana tana tan tan tan tana';
//     }
// }

// const user1 = new CreateUser("kamal1","Yogi1","k@y",23,"A-10");
// console.log(user1.firstName);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());


// class Animal{
//     constructor(name,age){
//         console.log("constructor called");
//         this.name = name;
//         // this.lastName = lastName;
//         // this.email = email;
//         this.age = age;
//         // this.address = address;
//     }   

//     about(){
//         return `${this.name} is ${this.age} years`;
//     }
//     iscute (){
//         return true;
//     }
//     sing(){
//         return 'tana tana tan tan tan tana';
//     }
// }
// class dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed = speed;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}`;
//     }
// }

// const tommy = new dog("Tommy",3,4);
// console.log(tommy);
// console.log(tommy.run())


// Getters and setters

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        // this.email = email;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
//    setName(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
set fullName(fullName){
    const [firstName,lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
}
}

const person1 = new Person("Kamal","Yogi",18);
// console.log(person1.fullName());
// person1.setName("KamalNew","YogiNew");
person1.fullName = "KamalNew YogiNew";
console.log(person1.firstName);
console.log(person1.lastName);

// Static Method and properties


class lol{
    static meth(){
        console.log("I am done imma sell meth now");
    }
    static property = "Meth";
}

lol.meth();
console.log(lol.property)