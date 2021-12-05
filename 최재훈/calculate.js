

let Add =(a,b)=>{
     return  `${a}+${b}=${parseInt(a+b)}`;
 
};


let Subtract = (a,b)=>{
    return `${a}-${b}=${parseInt(a-b)}`;
   
 };
 

 let Multiply =(a,b)=>{
    return `${a}*${b}=${parseInt(a*b)}`;
  
 };
 
 let Divide = (a,b)=>{
    return `${a}/${b}=${parseInt(a/b)}`;
  

 };
const test =  Add(10,5);
const test2 = Subtract(10,5);
const test3 = Multiply(10,5);
const test4 = Divide(10,5);
console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);