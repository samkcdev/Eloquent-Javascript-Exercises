//Higher order examples

function add(a, b) {
  //this function is called a callback, since I am passing this into maths function as parameter
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
//this maths function is called higher order function since it accepts
//another function as argument.
function maths(a, b, fn) {
  return fn(a, b);
}

console.dir(maths(1, 2, add));
console.dir(maths(1, 2, subtract));

// Let's try to write a function called each which accepts two parameters: an array and a callback function. The each function should loop over the array passed to it and run the callback function on each element in it.

// var arrayVals = function(arr) {
//   let arrVakues = "";
//   for (arrvale of arr) {
//     arrVakues += arrvale;
//   }
//   return arrVakues * 2;
// };

// function each(arr, fn) {
//   return fn(arr);
// }

// console.log(each([1, 2, 3, 4], arrayVals));
// console.log(each([1, 2, 3, 4], arrayVals));

function anotherEach(arrs, fn) {
  for (let a = 0; a < arrs.length; a++) {
    fn(arrs[a]);
  }
}

anotherEach([1, 2.3], function(val) {
  console.log(val);
});

anotherEach([1, 5, 6], function(val) {
  console.log(val * 5);
});

// Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example:

function mapArr(arr, fn) {
  var newArr = [];
  for (let a = 0; a < arr.length; a++) {
    newArr.push(fn(arr[a]));
  }
  return newArr;
}

mapArr([1, 2, 3, 4], function(val) {
  console.log(val * 5);
});

// Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:

function reject(arr, fn) {
  let newArr = [];
  for (let a = 0; a < arr.length; a++) {
    if (fn(arr[a]) === false) {
      newArr.push(arr[a]);
    }
  }
  console.log(newArr);
}

reject([1, 2, 3, 4], function(val) {
  // console.log(val);
  // console.log(val % 2 === 0);
  return val % 2 === 0;
});

reject([1, 2, 3, 4], function(val) {
  // console.log(val);
  // console.log(val % 2 === 0);
  return val > 2;
});
