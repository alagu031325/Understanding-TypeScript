const userName = "Alagu";

//Javascript typeof operator is used in expressions
console.log(`Javascript type: ${typeof userName}`);

//Typescript typeof operator - if const stores the literal type "Alagu" as type else stores "string" as its type
type UserName = typeof userName;
const user: UserName = "Alagu";

console.log(`Typescript type: ${user}`);
console.log("If we change the userName to let then typescript type will also be a sting");

const settings = {
    difficulty: 'medium',
    minLevel: 10,
    didStart: false,
    players: ["Ben", "Holly"]
};

//The type is automatically derived
type Settings = typeof settings;

function loadSettings(settings: Settings){
    // our code 
}

loadSettings(settings);

//can also be used to derive the type of functions
function sum(a: number, b: number) {
    return a + b;
}
function subtract(a: number, b: number) {
    return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: SumFn | SubtractFn) {
    // our code...
}