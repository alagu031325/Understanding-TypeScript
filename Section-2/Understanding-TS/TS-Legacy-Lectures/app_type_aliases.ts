//Type alias for reusability
type Combinable = number | string;
//type alias for literal types
type ConversionDescriptor = 'as-number' | 'as-text';

//Union Type
//we can have either a number type or string type
function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    //It thinks that in union types multiple types can be there and warns us about using + operator
    // const result = input1 + input2;
    let result: number | string;
    //Function can work with multiple type of values and does different things based on the type
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; //If cant convert to number then NaN will be returned
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;  
  }

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

//For some reason if we want the strings to be added as number then we use the third argument of literal type
const combinedStringAges = combine('30', '26', "as-number");
console.log(combinedAges);

const combinedNames = combine("Holly's ", 'Little Kingdom', "as-text");
console.log(combinedNames);