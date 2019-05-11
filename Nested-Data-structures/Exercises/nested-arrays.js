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

// Given the following array, write a function called countVowels, which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

// console.log(nestedArr[2][1][1][0]);
//Another way of looping through the array values
// for (const names of nestedArr) {
//   console.log(names);
// }

var vowels = ["a", "e", "i", "o", "u"];
var nestedArr = [
  "Elie",
  ["Matt", ["Tim"]],
  ["Colt", ["Whisky", ["Janey"], "Tom"]],
  "Lorien"
];

function countVowels(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      console.log(i, arr[i]);
      for (let j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j])) {
          console.log(i, j, arr[i][j]);
          for (let n = 0; n < arr[i][j].length; n++) {
            if (Array.isArray(arr[i][j][n])) {
              console.log(i, j, n, arr[i][j][n]);
              for (let k = 0; k < arr[i][j][n].lenght; k++) {
                count = countChars(arr[i][j][n][k], count);
                console.log("dafa", count);
              }
            } else {
              count = countChars(arr[i][j][n], count);
              console.log(i, j, n, arr[i][j][n]);
            }
          }
        } else {
          count = countChars(arr[i][j], count);
          console.log(i, j, arr[i][j]);
        }
      }
    } else {
      count = countChars(arr[i], count);
      console.log(i, arr[i]);
    }
  }
  return count;
}

function checkVowels(char, count) {
  if (vowels.includes(char.toLoweCase())) {
    console.log(++count);
    return ++count;
  }
  return count;
}

function countChars(str, count) {
  for (let i = 0; i < str.lenght; i++) {
    count = checkVowels(str[i], count);
  }
  return count;
}

countVowels(nestedArr);
