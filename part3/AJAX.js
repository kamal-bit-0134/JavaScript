// AJAX - asynchronous javascript and XML

// HTTP requests is what we will be learning here.


// requesting requests asynchronously js

// we don't use xml format we use json now.

// 3 common ways tp create and send request
// 1) xmlHTTPRequest
// 2) fetchApi
// 3) axios (third party library)


// create Object
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// let's use this object to create http requests

// Step1
// check ready state 
// console.log(xhr.readyState);
// xhr.open("GET",URL);
// console.log(xhr.readyState);

// xhr.onreadystatechange = function(){
//     // console.log(xhr);
//     // console.log(xhr.readyState);
//     if(xhr.readyState===4){
//         // console.log(typeof xhr.response);
//         // console.log(xhr.response);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);


//     }

// }

// or

// xhr.onload = function(){
//     // console.log(xhr.readyState);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();



// let's do error handling now 
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);
// xhr.onload = ()=>{
//     if(xhr.status>=200 && xhr.status<300){
//         const data = JSON.parse(xhr.response);
//         // console.log(data);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const url2 = `${URL}/${id}`;
//         // console.log(url2);
//         xhr2.open("GET",url2);
//         xhr2.onload=()=>{
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//         }
//         xhr2.send();
//     }
//     else{
//         console.log("something went wrong");
//     }
    

// }

// // method runs only when you have some network related error
// xhr.onerror = ()=>{
//     console.error("Network error bitch");
// }
// xhr.send();


// Let's promisift th epper function

// const URL = "https://jsonplaceholder.typicode.com/posts";


// function sendRequest(method,url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload = function(){
//             if(xhr.status>=200 && xhr.status<300){
//                 resolve(xhr.response);
//             }
//             else{
//                 reject(new Error("Something went wring."));
//             }
//         }
//         xhr.onerror = ()=>{
//                 console.error("Network error bitch");
//             }

//         xhr.send();
//     })
// }

// const whatisthis = sendRequest("GET",URL);
// console.log(whatisthis)

// sendRequest("GET",URL).then(response=>{
//     const data = JSON.parse(response);
//     // console.log(data);
//     return data;
// }).then(data=>{
//     // console.log(data);
//     const id =  data[3].id;
//     return id;
// }).then(id=>{

//     // console.log(id);
//     const url = `${URL}/${id}`;
//     return sendRequest("GET",url);
// }).then(newResponse=>{
//     const newData = JSON.parse(newResponse)
//     console.log(newData);
// }).catch(error=>{
//     console.log(error);
// })



// Now let's use the bext one Fetchhhh!!!!

// const URL = "https://jsonplaceholder.typicode.com/postss";
// const whatisthis = fetch(URL);
// // console.log(whatisthis);
// whatisthis.then(response=>{
//     // console.log(response);
//     return response.json();
// }).then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch");  
//     console.log(error);           //Only works when network error otherwise it ai't called
// })



// const URL = "https://jsonplaceholder.typicode.com/posts";
// // const whatisthis = fetch(URL);
// // console.log(whatisthis);
// fetch(URL).then(response=>{
//     // console.log(response);
//     if(response.ok)
//     {return response.json();}
//     else{
//         throw new Error("Something went wrong");
//     }
// }).then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.log(error);
// })




  const URL = "https://jsonplaceholder.typicode.com/postsss";
// const whatisthis = fetch(URL);
// console.log(whatisthis);
// fetch(URL,{
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }).then(response=>{
//     // console.log(response);
//     if(response.ok)
//     {return response.json();}
//     else{
//         throw new Error("Something went wrong");
//     }
// }).then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.log(error);
// })

