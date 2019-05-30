// Higher Order Functions, Timers, and Closures Exercises

// countdown

// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

function countdown(num) {
  var intervalId = setInterval(decrementer, 1000);

  function decrementer() {
    num--;
    console.log(num);
    if (num === 0) {
      clearInterval(intervalId);
      console.log("Done");
    }
  }
}

// countdown(5);

//randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

function randomGame() {
  var timerId = setInterval(randomNumberPicker, 1000);
  var counter = 0;
  function randomNumberPicker() {
    var randomNumer = Math.random();
    counter++;
    console.log(randomNumer);
    if (randomNumer > 0.75) {
      clearInterval(timerId);
    }
    console.log(counter);
  }
}

// randomGame();

//Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not

function isEven(num) {
  if (num % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// isEven(5);

//Odd Number

function isOdd(num) {
  if (num % 2 !== 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

//Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false

// function isPrime(num) {
//   if (num > 1 && num % num === 0 && num % 1 === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// isPrime(8);

//Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

function numberFact(num, fn) {
  return fn(num);
}

// numberFact(6, isEven);
// numberFact(6, isOdd);

//find
//Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

function find(arr, fn) {
  for (let a = 0; a < arr.length; a++) {
    if (fn(arr[a])) {
      console.log(arr[a]);
      return arr[a];
    }
  }
}

find([8, 11, 4, 27], function(val) {
  return val >= 10;
});

find([8, 11, 4, 27], function(val) {
  return val < 10;
});

//findIndex

//Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.

function findIndex(arr, fn) {
  for (let a = 0; a < arr.length; a++) {
    if (fn(arr[a])) {
      console.log(arr.indexOf(arr[a]));
      return arr.indexOf(arr[a]);
    }
  }
}

findIndex([8, 11, 4, 27], function(val) {
  return val >= 10;
});

findIndex([8, 11, 4, 27], function(val) {
  return val < 7;
});

//specialMultiply

// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
