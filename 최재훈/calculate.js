
let add =(a,b)=>{
     return  `${a}+${b}=${parseInt(a+b)}`;
};


let subtract = (a,b)=>{
    return `${a}-${b}=${parseInt(a-b)}`;
 };
 

 let multiply =(a,b)=>{
    return `${a}*${b}=${parseInt(a*b)}`;
 };
 
 let divide = (a,b)=>{
    return `${a}/${b}=${parseInt(a/b)}`;

 };
 
const test =  add(10,5);
const test2 = subtract(10,5);
const test3 = multiply(10,5);
const test4 = divide(10,5);
console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);