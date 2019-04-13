//Create an object that has your firstName, lastName, and occupation as keys.

var me = {
  firstName: "Sam",
  lastName: "Cherian",
  occupation: "Developer"
};

//Accessing Objects through dot and bracket notations
console.log(me.firstName);
console.log(me["lastName"]);
console.log(me.occupation);
//Adding hobby key with value
console.log((me.hobby = "Reading"));
//Deleting occupation
console.log(delete me.occupation);
console.log(me);

//Given the following object below, write code to print the value then the key to the console separated by '=>':

var namesAndHobbies = {
  elie: "JavaScript",
  matt: "jogging",
  janey: "table building",
  tim: "sailing"
};

//Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.

namesAndHobbies.sam = "reading";

//Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

for (let objKey in namesAndHobbies) {
  console.log(namesAndHobbies[objKey] + " => " + objKey);
  if ("sam" in namesAndHobbies) {
    console.log(objKey + ":" + namesAndHobbies.sam);
  }
}

//------------------------------------------------------------------------------------------
var programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("GO");
console.table(programming);

//Change the difficulty to the value of 7.

programming.difficulty = 7;

console.table(programming);

//Using the delete keyword, write the command to remove the jokes key from the programming object.

delete programming.jokes;

console.table(programming);

//Write the command to add a new key called isFun and a value of true to the programming object.

programming.isFun = true;
console.table(programming);

//Using a loop, iterate through the languages array and console.log all of the languages.
for (let i = 0; i < programming.languages.length; i++) {
  console.log(programming.languages[i]);
}
//Using a loop, console.log all of the keys in the programming object.

for (objKeys in programming) {
  console.log(objKeys);
}

//Using a loop, console.log all of the values in the programming object.
for (objKeys in programming) {
  console.log(programming[objKeys]);
}
