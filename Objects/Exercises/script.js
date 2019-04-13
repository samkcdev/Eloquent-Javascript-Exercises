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
