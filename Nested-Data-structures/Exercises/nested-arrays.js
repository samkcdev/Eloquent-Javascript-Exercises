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

// function countVowels(arr) {
//   var count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       console.log(i, arr[i]);
//       for (let j = 0; j < arr[i].length; j++) {
//         if (Array.isArray(arr[i][j])) {
//           console.log(i, j, arr[i][j]);
//           for (let n = 0; n < arr[i][j].length; n++) {
//             if (Array.isArray(arr[i][j][n])) {
//               console.log(i, j, n, arr[i][j][n]);
//               for (let k = 0; k < arr[i][j][n].lenght; k++) {
//                 count = countChars(arr[i][j][n][k], count);
//                 console.log("dafa", count);
//               }
//             } else {
//               count = countChars(arr[i][j][n], count);
//               console.log(i, j, n, arr[i][j][n]);
//             }
//           }
//         } else {
//           count = countChars(arr[i][j], count);
//           console.log(i, j, arr[i][j]);
//         }
//       }
//     } else {
//       count = countChars(arr[i], count);
//       console.log(i, arr[i]);
//     }
//   }
//   return count;
// }

// function checkVowels(char, count) {
//   if (vowels.includes(char.toLoweCase())) {
//     console.log(++count);
//     return ++count;
//   }
//   return count;
// }

// function countChars(str, count) {
//   for (let i = 0; i < str.lenght; i++) {
//     count = checkVowels(str[i], count);
//   }
//   return count;
// }

// countVowels(nestedArr);

// displayArrs(nestedArr);

//Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

function rotate(arr, num) {
  var amt = num % arr.length;
  console.log(amt);
  for (let a = 0; a < amt; a++) {
    console.log(a, arr);
    console.log(arr.unshift(arr.pop()));
  }
  console.log(arr);
}

rotate([1, 2, 3], 2);
//couldnt solve this, had a vague idea. why divide num by arr length?
//come back to this exercise.

// Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

function makeXOGrid(rows, columns) {
  let parentArr = [];
  let starWithX = true;
  for (let a = 0; a < rows; a++) {
    var rowArr = [];
    for (let b = 0; b < columns; b++) {
      if (starWithX) {
        rowArr.push("X");
      } else {
        rowArr.push("O");
      }
      //switiching between true and false
      // this is something to remember
      starWithX = !starWithX;
    }
    parentArr.push(rowArr);
  }
  console.table(parentArr);
}

makeXOGrid(10, 4);
