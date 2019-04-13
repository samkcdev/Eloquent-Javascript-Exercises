//Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.

function myName() {
  var fullName = "Sam Cherian";
  return fullName;
}

console.log(myName());

//Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".
// Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back from Math.random.

var favoriteFoods = ["pizza", "ice cream"];

function randomFood() {
  for (let i = 0; i < favoriteFoods.length; i++) {
    var randomFood = favoriteFoods[Math.round(Math.random())];
  }
  console.log(randomFood);
}

randomFood();

// Create a variable called numbers which is an array that contains the numbers 1 through 10.

// Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. Here is what that might look like:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      console.log("Odd Numbers " + numbers[i]);
    }
  }
}

oddNumbers();

function evenNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      console.log("Even Numbers " + numbers[i]);
    }
  }
}

evenNumbers();

function returnFirstOddNumber() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      console.log("First Odd Number " + numbers[0]);
      break;
    }
  }
}

returnFirstOddNumber();

function returnFirstEvenNumber() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      console.log("First Even Number " + numbers[i]);
      break;
    }
  }
}
returnFirstEvenNumber();

function returnFirstHalf() {
  for (let i = 0; i < numbers.length; i++) {
    var firstHalf = numbers.slice(0, numbers.length / 2);
  }
  console.log(firstHalf);
}

returnFirstHalf();

function returnSecondHalf() {
  for (let i = 0; i < numbers.length; i++) {
    var secondHalf = numbers.slice(numbers.length / 2);
  }
  console.log(secondHalf);
}

returnSecondHalf();
