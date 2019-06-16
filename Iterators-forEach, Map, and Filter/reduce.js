//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key

function extractKey(arrObj, key) {
  arrObj.reduce(function(acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
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
  arr.reduce(function(acc, next) {
    if (next.toLowerCase() !== letter.toLowerCase()) {
      return acc;
    } else {
      return acc + 1;
    }
  }, 0);
}

filterLetters(["a", "a", "b", "c", "A"], "a"); // 3
filterLetters(["a", "a", "b", "c", "A"], "z"); // 0
filterLetters(["a", "a", "b", "c", "A"], "B"); // 1

// var arr = [1, 2, 3, 4];
// arr.reduce(function(acc, next) {
//   if (next >= 2) {
//     acc["key" + next] = next;
//   }
//   return acc;
// }, {});

//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!

function addKeyAndValue(arr, key, val) {
  var newObject = arr.reduce(function(acc, next) {
    next[key] = val;
    acc.push(next);
    return acc;
  }, []);
  console.log(newObject);
}

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Elie" }],
  "isInstructor",
  true
);

var myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

var orderArray = myArray.reduce(function(acc, nextVal) {
  if (acc.indexOf(nextVal) === -1) {
    acc.push(nextVal);
  }
  return acc;
}, []);

console.log(orderArray);
