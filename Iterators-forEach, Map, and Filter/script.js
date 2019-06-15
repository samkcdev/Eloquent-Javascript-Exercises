function printFirstAndLast(arr) {
  arr.forEach(element => {
    console.log(element[0] + element[element.length - 1]);
  });
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

let arr = [5, 6, 8];

arr.forEach(function(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log(this);
});
