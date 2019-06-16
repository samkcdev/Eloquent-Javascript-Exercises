//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key

function extractKey(arrObj, key) {
  arrObj.reduce(function(acc, next) {
    acc.push(next[key]);
    console.log(acc);
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

// function filterLetters(arr, letter) {
//   arr.reduce(function(acc, next) {
//     if (next.toLowerCase() !== letter.toLowerCase()) {
//       return acc;
//     } else {
//       console.log(acc + 1);
//       return acc + 1;
//     }
//   }, 0);
// }

// filterLetters(["a", "a", "b", "c", "A"], "a"); // 3
// filterLetters(["a", "a", "b", "c", "A"], "z"); // 0
// filterLetters(["a", "a", "b", "c", "A"], "B"); // 1
