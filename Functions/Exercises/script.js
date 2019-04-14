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

// Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.

function add(numbOne, numbTwo) {
  console.log(numbOne + numbTwo);
}
function subtract(numbOne, numbTwo) {
  console.log(numbOne - numbTwo);
}

function multiply(numbOne, numbTwo) {
  console.log(numbOne * numbTwo);
}

function divide(numbOne, numbTwo) {
  console.log(numbOne / numbTwo);
}
add(5, 6);
subtract(5, 6);
multiply(5, 6);
divide(5, 6);

// Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.

function sayHello(name) {
  console.log(name === "Sam" ? "Hello Boss" : "Hello " + name);
}

sayHello("Sam");
sayHello("Bency");

// Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)

function average(arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total / 2);
}

average([1, 2, 3]);
average([1, 2, 4, 5, 6, 8, 9, 10]);

//note:when adding always add a variable with initial value and update that variable
// Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the

function createStudent(stringOne, stringTwo) {
  var functionObj = {
    firstName: stringOne,
    secondName: stringTwo
  };
  return functionObj;
}

var studentOne = createStudent("Sam", "Cherian");
var studentTwo = createStudent("Bency", "Cherian");
var studentThree = createStudent("Joe", "Ann");

var students = [studentOne, studentTwo, studentThree];
console.table(students);

//Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

function findStudentByFirstName(name) {
  var lowecaseapara = name.toLowerCase();
  for (var i = 0; i < students.length; i++) {
    if (lowecaseapara === students[i].firstName.toLowerCase()) {
      console.log("There is a student with firstname " + students[i].firstName);
    }
  }
  return false;
}

findStudentByFirstName("sam");
findStudentByFirstName("joe");
findStudentByFirstName("bency");
findStudentByFirstName("Monika");

// Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

function extractEveryThird(arraypara) {
  let newArr = [];
  for (let i = 2; i < arraypara.length; i += 3) {
    newArr.push(arraypara[i]);
  }
  console.log(newArr);
}

extractEveryThird([1, 3, 4, 5, 6, 7, 8, 9, 10]);

// Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.
function countEvensAndOdds(oddevenarr) {
  var odds = 0;
  var evens = 0;
  for (let i = 0; i < oddevenarr.length; i++) {
    if (oddevenarr[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  var resultobj = {
    oddCount: odds,
    eventCount: evens
  };
  console.log(resultobj);
}

countEvensAndOdds([1, 2, 3, 4]);
countEvensAndOdds([1, 2, 3, 4, 5, 6, 7]);

function onlyCapitalLetters(capString) {
  var onlyCapitalLetters = "";
  for (let i = 0; i < capString.length; i++) {
    onlyCapitalLetters = capString[i];
    if (onlyCapitalLetters === capString[i].toUpperCase()) {
      console.log(onlyCapitalLetters);
    }
  }
  return false;
}
onlyCapitalLetters("Amazing");
onlyCapitalLetters("NothIng");
