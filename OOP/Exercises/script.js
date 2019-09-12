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
