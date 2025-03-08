function add(num1: number, num2: number, showResult: boolean, resultPhrase: string){
    const result = num1 + num2;
    if(showResult){
        console.log(resultPhrase + result);
    } else {
        return result;
    }
}

//TypeScript infers type of variables 

// Only type hint if the variable is not initialised to let typescript know what type of value will be assigned to a variable in the future

// It infers the type so it is redundant to type hint it
// const number1: number = 5.6
const number1 = 5.6;
const number2 = 2.7;
const showResult = true;
const resultPhrase = "The Result is: "

add(number1, number2, showResult, resultPhrase);