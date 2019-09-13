function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + " just barked");
  };
}

let rusty = new Dog("Rusty", 3);
let fido = new Dog("Fido", 5);

rusty.bark();

//using the call function to borrow properties from another constructor

function Car(model, type, year) {
  this.model = model;
  this.type = type;
  this.year = year;
  this.numberOfwheels = 4;
}

function MotorCycle(model, type, year, make) {
  Car.call(this, model, type, year);
  this.numberOfwheels = 2;
  this.make = make;
}

ducatti = new MotorCycle("Ducatti", "Superbike", 2000, "Ducattis");
console.table(ducatti);

//Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function(number) {
    console.log(this.favoriteNumber * number);
  };
}

let personOne = new Person("Sam", "Cherian", "blue", 5);
personOne.multiplyFavoriteNumber(2);

//Refactor the following code so that there is no duplication inside the Child function.

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
  Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}

let parent = new Parent("Cherian", "K S", "Red", "Rice");
let child = new Child("Sam", "Cherian", "Blue", "Rice");

console.log(parent, child);
