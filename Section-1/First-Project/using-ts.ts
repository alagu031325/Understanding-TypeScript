//! - tells that this button element cant be null - typescript allows us to double check our html contents 
const button = document.querySelector("button")!;

//type casting - all HTML elements will not have value attribute so typescript throws warning when we access value until we type the element
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

//type hinting variables
function add(num1: number,num2: number) {
  return num1 + num2;
}

//converting string to int to match the type of arguments
button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
