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

countdown(5);
