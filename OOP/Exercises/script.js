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
