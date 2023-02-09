const users = [
    {userID:1,firstName:'harshit',gender:'male'},
    {userID:2,firstName:'mohit',gender:'male'},
    {userID:3,firstName:'nitish',gender:'male'}
]
console.log(users);

const [user1,user2,user3] = users;

const [ { firstName :user1firstName,userID}]= users

console.log(user1);
console.log(user2);

console.log(user3);
console.log(user1firstName);








