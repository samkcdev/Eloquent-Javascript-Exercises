//Part One
let arr = [];
arr = ["Sam"];
arr.push("Cherian");
arr.unshift("Animal Farm is my fav Book");
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
//this passing by value
//need to research more on this

var arrOne = [1, 2, 3, 4];
console.log(arrOne);
var arrTwo = arrOne;
console.log(arrTwo);
arrTwo.push(5);
console.log("arrTwo after push" + arrTwo);
console.log("arrOne after push" + arrOne);

//here any change in arrTwo affects arrOne
//becasue arrays are just referenced not passed as value
