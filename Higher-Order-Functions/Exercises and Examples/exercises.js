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

randomGame();
