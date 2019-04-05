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

//splice()

//it can be used to both add and delete values from array

// sampleArr.splice(0, 1);
// console.log(sampleArr);
