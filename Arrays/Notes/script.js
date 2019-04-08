let sampleArr = ["Sam", 2, "Biriyani"];

// Adding a new value to array
//push() adds value at the last of an array
//this doesnt create a new array
//this just returns the new array length
let pushArr = sampleArr.push("Animal Farm");
console.log(pushArr);
console.log(sampleArr);
// ----------------------------------------------
// Adding a new value at the start of an array
// unshift();
let unshiftArr = sampleArr.unshift(666);
console.log(unshiftArr);
console.log(sampleArr);

//Removing a value from the back of an array
//pop()

let popArr = sampleArr.pop();

console.log(popArr);
console.log(sampleArr);

//Removing a value from the beggining of an array
//shift();
let shiftArr = sampleArr.shift();
console.log(shiftArr);
console.log(sampleArr);

/*
pop() and unshift() return the value that has been removed from the array
*/

////splice()
//it can be used to both add and delete values from array
//the below code removes an item from the array
//splice takes two params
//first is the index and second is the number of items to removed or added
let sampleSplice = sampleArr.splice(0, 1);
//Splice creates a new array
console.log("After splice ", sampleSplice);
console.log(sampleArr);
let sampleSpliceAdd = sampleArr.splice(1, 0, "The God of small things");

console.log("After splice ", sampleSpliceAdd);
console.log(sampleArr);

//slice
//creates a copy array or we can create new sub-array from an array
//it takes two params
//first one is the starting index and second last index
//the result will the new sub array from starting index and going upto last index(not including the last index)
//but if we dont specify the last index it will start and show all the values after that
let books = ["1984", "Animal Farm", "Randam Oozham", "Pathummade aadu"];
let malayalamBooks = books.slice(2);
console.log(malayalamBooks);

//Testing array methods

let inputVal = document.getElementById("inputArr");
let val = document.getElementById("vals");
let arr = [];
let button = document.querySelector("button");
let delButton = document.getElementById("popBtn");

button.addEventListener("click", function() {
  arr.push(inputVal.value);
  // arr.unshift(inputVal.value);
  printArr();
  console.log(arr);
});

delButton.addEventListener("click", function() {
  arr.pop();
  console.log(arr);
});

function printArr() {
  for (let i = 0; i < arr.length; i++) {
    val.innerText += " " + "[" + arr[i] + "]";
  }
}
