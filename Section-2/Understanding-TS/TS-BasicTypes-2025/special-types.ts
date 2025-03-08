//we can only store null in here - combined with union types this can be helpful
let a: null | string;

//this variable hold a number or value "undefined"
let b: undefined | number;

//if element not found then returns null - "!" - informs typescript that this line of code will never be null - not recommended - if it is null then we might get run-time error 
const inputElement = document.getElementById("user-name") as HTMLInputElement;

//Type narrowing
if(!inputElement) {
    throw new Error('Element not found');
}

//inline check whether inputElement is null or not - optional chaining
console.log(inputElement?.value);

//Type casting or type assertion - converting one type to another type - 'as' operator

//unknown type used with functions 
function process(val: unknown){
    //process some value retrieved from API or backend DB - we dont know the type of data 
    //any type - type restrictions are not imposed - allows any type of data
    //unknown - it forces the developer to add if checks to see if the received value matches our requirements 
    if (
        typeof val === 'object' &&
        !!val &&
        'log' in val &&
        typeof val.log === 'function'
    ) {
        val.log();
    }
}

//Optional parameter 
function generateError(msg?: string) {
    throw new Error(msg || '');
}

generateError();

//optional properties
type UserObj = {
    name: string;
    age?: number;
}

//Nullish coalescing - modern JS supports it
let input = null;
//checks whether input is null or undefined, if it finds it then value on the right side is stored - it doesnt look for falsy values as "||" operator does 
const didProvideInput = input ?? false;
