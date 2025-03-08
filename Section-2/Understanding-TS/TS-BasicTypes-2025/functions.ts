//return type notation - but return types can be inferred too 
function addition(num1: number, num2: number): number {
    return num1 + num2;
}

//doesnt return anything - so void return type inferred
function log(message: string){
    console.log(message);
}

//never return type - specific type - will never return - since it throws error and stops execution 
//so this function can never be used somewhere where a value is expected
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

//function as a whole is a value and can be stored in a variable in JS - () => return type --> this is function type in typescript
function performJob(cb: (message: string) => void) {
    //...callback function to be executed
    cb('Job Done!');
}

performJob(log);

type User = {
    name: string;
    age: number;
    greet: (msg: string) => void;
}

//defining greet by object's method syntax
let user: User = {
    name: "Holly",
    age: 5,
    greet(msg) {
        console.log(msg);
    }
}

user.greet('Welcome to the world of TypeScript');