



// fetch(URL).then(response=>{
//     return response.json();
// }).then(data=>{
//     console.log(data);

// })
const URL = "https://jsonplaceholder.typicode.com/posts";


async function getPosts(){
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(response);
    return data;
}

// const returned = getPosts();
// console.log(returned);

// const myData = getPosts();
// console.log(myData);


getPosts().then(myData=>{
    console.log(myData);
}).catch(error=>{
    console.log("Inside catch");
    console.log(error);
})