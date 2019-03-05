let inputOne = document.getElementById("firstNum");
let inputTwo = document.getElementById("secondNum");
let inputThree = document.getElementById("thirdNum");
let submitBtn = document.getElementById("btn");
let resetBtn = document.getElementById("reset-btn");
let answer = document.getElementById("result");

submitBtn.addEventListener("click", function() {
  let product =
    Number(inputOne.value) * Number(inputTwo.value) * Number(inputThree.value);
  if (Math.sign(product) == -1) {
    answer.innerHTML = "-";
  } else if (Math.sign(product) == 1) {
    answer.innerHTML = "+";
  }
  // answer.innerHTML = product;
});

resetBtn.addEventListener("click", function() {
  inputOne.value = "";
  inputTwo.value = "";
  answer.innerHTML = "";
});

//things I learned in this
//built in function in JS called Math.sign(number)
//that checks for the sign of a number
//eg:Math.sign(-4) result will be -1;
//eg:Math.sign(1) result will be 1;
//Reference website: https://www.geeksforgeeks.org/javascript-math-sign-function/
