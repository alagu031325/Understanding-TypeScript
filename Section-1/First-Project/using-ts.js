var button = document.querySelector("button");
//type casting - all HTML elements will not have value attribute so typescript throws warning when we access value until we type the element
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
