//Write a function called displayFullName, which should accept two parameters, firstName and lastName. The function should be immediately invoked and return the firstName + lastName. You should NOT have to call this function, it should invoke right away.

(function displayFullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
})("Sam", "Cherian");

// Write a function called createCalculator, which should return an object that has four methods, add, subtract, multiply and divide.

function createCalculator(numberOne, numberTwo) {
  return {
    add: function(numberOne, numberTwo) {
      console.log(numberOne + numberTwo);
    },
    minus: function(numberOne, numberTwo) {
      return numberOne - numberTwo;
    },
    multiply: function() {
      return numberOne * numberTwo;
    },
    multiply: function() {
      return numberOne / numberTwo;
    }
  };
}

var calculating = createCalculator();
console.log(calculating);
calculating.add(3, 5);
