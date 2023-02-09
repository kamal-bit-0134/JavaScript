const app = () =>{
    const myFunc = () =>{
        console.log("heelow from here");
    }
    const addTwo = (num1,num2) =>{
        return num1+num2;
    }
    const mul = (num1,num2) => num1*num2;
    console.log("Inside app");
    // console.log(myFunc())
    myFunc();
    console.log(addTwo(2,2));
    console.log(mul(2,2));
}

app();

