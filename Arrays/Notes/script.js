let sampleArr = ["Sam", 2, "Biriyani"];

// Adding a new value to array
//push() adds value at the last of an array
sampleArr.push("Animal Farm");
//Adding a new value at the start of an array
//unshift();

console.log(sampleArr.unshift(666));
console.log(sampleArr);

//Removing a value from the back of an array
//pop()

console.log(sampleArr.pop());
console.log(sampleArr);

//Removing a value from the beggining of an array
//unshift();
console.log(sampleArr.shift());
console.log(sampleArr);

//splice()

//it can be used to both add and delete values from array

sampleArr.splice(0, 1);
console.log(sampleArr);
