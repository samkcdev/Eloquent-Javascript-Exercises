let inputOne = document.getElementById("firstNum");
let inputTwo = document.getElementById("secondNum");
let inputThree = document.getElementById("thirdNum");
let submitBtn = document.getElementById("btn");
let resetBtn = document.getElementById("reset-btn");
let answer = document.getElementById("result");

submitBtn.addEventListener("click", function() {
  if (
    Number(inputOne.value) < Number(inputTwo.value) &&
    Number(inputOne.value) < Number(inputThree.value)
  ) {
    if (Number(inputTwo.value) < Number(inputThree.value)) {
      answer.innerHTML =
        inputOne.value + " " + inputTwo.value + " " + inputThree.value;
    } else
      answer.innerHTML =
        inputOne.value + " " + inputThree.value + " " + inputTwo.value;
  } else if (
    Number(inputTwo.value) < Number(inputOne.value) &&
    Number(inputTwo.value) < Number(inputThree.value)
  ) {
    if (Number(inputOne.value) < Number(inputThree.value)) {
      answer.innerHTML =
        inputTwo.value + " " + inputOne.value + " " + inputThree.value;
    } else {
      answer.innerHTML =
        inputTwo.value + " " + inputThree.value + " " + inputOne.value;
    }
  } else if (
    Number(inputThree.value) < Number(inputOne.value) &&
    Number(inputThree.value) < Number(inputTwo.value)
  ) {
    if (Number(inputOne.value) < Number(inputTwo.value)) {
      answer.innerHTML =
        inputThree.value + " " + inputOne.value + " " + inputTwo.value;
    } else {
      answer.innerHTML =
        inputThree.value + " " + inputTwo.value + " " + inputOne.value;
    }
  }
});

resetBtn.addEventListener("click", function() {
  inputOne.value = "";
  inputTwo.value = "";
  inputThree.value = "";
  answer.innerHTML = "";
});

//things I learned in this
//this is using long and tedious method of comparing each and every number with other one by one
//getting the result
