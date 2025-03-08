function addTwoNumbers(n1: number, n2: number) {
    return n1 + n2;
}

//void return type - doesnt have return stmt 
function printResult(num: number){
    console.log('Result: ' + num);
}
//if return type is void - it means we ignore any result returned by the callback function 
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(90, 100, (result) => {
    console.log(result);
});

//"undefined" in JS is a real value 
//console.log(printResult(13)); //prints undefined since it doesnt return anything

printResult(addTwoNumbers(5, 12));

//TypeScript also supports 'undefined' so a variable can be of undefined type
let incrementValue: undefined;

//But for functions Typescript doesnt allow undefined as the return type - it is more clear to use void if the function doesnt return anything

//Function types
// let combineValues: Function; - any function can be assigned like printResults
let combineValues: (a: number, b: number) => number; //takes 2 parameters where each parameter is a number and the function overall returns a number

combineValues = addTwoNumbers;
//combineValues = 5; //Typescript cant detect errors since type of the combineValues is any 

console.log(combineValues(5,7));