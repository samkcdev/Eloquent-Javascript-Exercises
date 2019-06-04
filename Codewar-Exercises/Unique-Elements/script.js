// var uniqueInOrder = function(iterable) {
//   var arr = [];
//   // console.log(iterable);
//   for (let a = 0; a < iterable.length; a++) {
//     console.log(arr.indexOf(iterable[a]));
//     if (arr.indexOf(iterable[a]) === -1) {
//       arr.push(iterable[a]);
//     }
//   }
//   return arr;
// };

// uniqueInOrder("AAAABBBCCDAABBB");

var uniqueInOrder = function(iterable) {
  var arr = [];
  for (let a = 0; a < iterable.length; a++) {
    // console.log("iterable[a] ", iterable[a]);
    // console.log("iterable[a + 1]", iterable[a + 1]);
    // console.log(iterable[a] === iterable[a + 1]);
    if (iterable[a] === iterable[a + 1]) continue;
    //continue is way of skipping in for..loop
    //if true continue for loop
    //if false push it to array
    //so cool!
    arr.push(iterable[a]);
  }
  return arr;
};

uniqueInOrder("AAAABBBCCDAABBB");
//answer should be ABCDAB
