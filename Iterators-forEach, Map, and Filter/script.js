//Testing forEach()
let arr = [5, 6, 8];

arr.forEach(function(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log(this);
});

//testing map()
let arrMap = [5, 6, 8];

let testMap = arrMap.map(function(value) {
  console.log(value + 2);
  return value + 2;
});

console.log(testMap);

//Exercises starts here

function printFirstAndLast(arr) {
  let newVals = "";
  arr.forEach(element => {
    console.log(element[0] + element[element.length - 1]);
    newVals += element[0] + element[element.length - 1];
  });
  console.log(newVals);
}
printFirstAndLast(["awesome", "example", "of", "forEach"]);

//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.

function addKeyAndValue(arr, key, value) {
  arr.forEach(element => {
    console.log((element[key] = value));
  });
  console.table(arr);
  return arr;
}

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Elie" }],
  "isInstructor",
  true
);

//map exercises

//Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

let arrMaps = [5, 6, 7];

function valTimesIndex(arr) {
  let mappedValsNum = arr.map(function(val, index) {
    return val * index;
  });
  let newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.innerText = mappedValsNum;
  console.log(mappedValsNum);
}

valTimesIndex(arrMaps);

//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

function extractKey(arr, key) {
  let mappedVals = arr.map(function(value) {
    return value[key];
  });
  //   document.body.innerHTML = mappedVals;
  console.log(mappedVals);
}

extractKey(
  [
    { name: "Elie", isInstructor: true },
    { name: "Tim", isInstructor: true },
    { name: "Matt", isInstructor: true }
  ],
  "name"
);

//Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

function filterLetters(arr, letter) {
  let counter = 0;
  arr.filter(function(value) {
    if (value.toLowerCase() === letter.toLowerCase()) {
      return counter++;
    }
  });

  console.log(counter);
}

filterLetters(["a", "a", "b", "c", "A"], "a");
filterLetters(["a", "a", "b", "c", "A"], "z");
filterLetters(["a", "a", "b", "c", "A"], "B");

//Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:

function filterKey(arrObj, key) {
  let truthyKeys = arrObj.filter(function(elem) {
    return elem[key] === true;
  });
  console.log(truthyKeys);
}

filterKey(
  [
    { name: "Elie", isInstructor: true, isHilarious: false },
    { name: "Tim", isInstructor: true, isHilarious: true },
    { name: "Matt", isInstructor: true }
  ],
  "isHilarious"
);

//filter out a and move it to front of array

var name = "sachina";
var nameSplit = name.split("");
var emptyArr = [];

var filteredA = nameSplit.filter(function(val) {
  return val === "a";
});

var newarraywithA = filteredA.forEach(function(val) {
  nameSplit.unshift(val);
});

console.log(filteredA);
console.log(nameSplit);

//combining iterators

var arrNum = [1, 2, 3, 4, 5];

var finalVals = arrNum
  .filter(function(val) {
    return val % 2 !== 0;
  })
  .map(function(val) {
    return val * 2;
  })
  .reduce(function(acc, currentVal) {
    return acc + currentVal;
  }, 0);

console.log(finalVals);
