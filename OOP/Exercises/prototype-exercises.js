//Prototypes Exercise

//Part One:

// Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (which should be an array).
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = [];
  this.family = [];
}

Person.prototype.fullName = function() {
  console.log(`${this.firstName} ${this.lastName}`);
};

Person.prototype.toString = function() {
  console.log(
    `${this.firstName} ${this.lastName}, Favorite Color:${this.favoriteColor}, Favorite Number:${this.favoriteNumber}`
  );
};

Person.prototype.addToFamily = function(passedVal) {
  if (passedVal instanceof Object) {
    if (this.family.indexOf(passedVal) === -1) {
      console.log(this.family.push(passedVal));
    }
  }
};

let firstPerson = new Person("Sam", "Cherian", "Red", 10);
let secondPerson = new Person("Joe", "S", "Blue", 11);
console.log(typeof firstPerson);
firstPerson.fullName();
firstPerson.toString();

firstPerson.addToFamily(firstPerson);
firstPerson.addToFamily(firstPerson);
firstPerson.addToFamily(firstPerson);
secondPerson.addToFamily(secondPerson);
console.log(firstPerson.family);
console.log(secondPerson.family);
