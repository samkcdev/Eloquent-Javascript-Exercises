//Given the following array, write a function called printEvens that console.logs all of the even numbers
var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

function printEvens() {
  for (let i = 0; i < nestedArr.length; i++) {
    var singleArrVal = nestedArr[i];
    for (let j = 0; j < nestedArr[i].length; j++) {
      var innerArrVal = nestedArr[i][j];
      if (innerArrVal % 2 === 0) {
        console.log(innerArrVal);
      }
    }
  }
}

printEvens();

//Given the following array, write a function called sumTotal returns the sum of all numbers in the array

var nestedArr = [[1, 2], [3, 4], [5, 6]];

function sumTotal() {
  var innerArrVal = 0;
  for (let i = 0; i < nestedArr.length; i++) {
    for (let j = 0; j < nestedArr[i].length; j++) {
      innerArrVal += nestedArr[i][j];
    }
  }
  console.log("Sum " + innerArrVal);
}

sumTotal();
