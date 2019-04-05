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
