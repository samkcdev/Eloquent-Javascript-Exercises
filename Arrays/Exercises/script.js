//Part One
let arr = [];
arr = ["Sam"];
arr.push("Cherian");
arr.unshift("Anjmal Farm is my fav Book");
arr.shift(0);
console.log(arr);

arr2 = [15];
arr2.push("JavaScript");
//finding indexOf of an element
//no element found or nothing is passed
//it returns -1
console.log(arr2.indexOf());
let combineArr = arr.concat(arr2);
console.log(arr2);
console.log(combineArr);

//Part Two
var newArr = ["JavaScript", "Python", "Ruby", "Java"];
var fromNewArr = newArr.slice(1, 3);
console.log(fromNewArr);

combinedNewArr = newArr.concat(["Haskell", "Clojure"]);
console.log(combinedNewArr);

let newString = newArr.join(", ");
console.log(newString);

// Trying to Understand Passing by value and passing by Reference

var a = "Sam";
var b = a;
console.log(a, b);
var b = "Bency";
console.log(a, b);
// Here b value has changed
// but a value remains the same.
//changing b value havent affected the value of a.
