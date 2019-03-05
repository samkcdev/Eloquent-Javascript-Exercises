let inputOne = document.getElementById("firstNum");
let inputTwo = document.getElementById("secondNum");
let submitBtn = document.getElementById("btn");
let resetBtn = document.getElementById("reset-btn");
let answer = document.getElementById("result");

submitBtn.addEventListener("click", function() {
  if (Number(inputOne.value) >= Number(inputTwo.value)) {
    answer.innerHTML = Number(inputOne.value);
  } else if (Number(inputTwo.value) >= Number(inputOne.value)) {
    answer.innerHTML = Number(inputTwo.value);
  }
});

resetBtn.addEventListener("click", function() {
  inputOne.value = "";
  inputTwo.value = "";
  answer.innerHTML = "";
});

//things I learned in this
//input.value is always a string
//so if you have to compare numbers
//convert it to number using Number();
//Please correct me If I am wrong.
