//Explicit Type assignment
let userName: string;
//Type inferred by TypeScript
//If we want to allow other types in addition to the inferred types then we can assign types manually using union types
let userAge: number | string = 38;

//Initial value assigned so second parameter is optional 
function add(a: number, b = 5){
    return a + b;
}

console.log(add(10));
//overriding second parameter - but it has to be a number - since typescript has inferred the type of parameter b to be a number
console.log(add(10, 34));