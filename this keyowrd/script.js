var colt = {
  firstName: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  addNumber: function(a, b, c, d) {
    return this.firstName + " just added " + (a + b + c + d);
  }
};

var sam = {
  firstName: "Sam"
};

// console.log(colt.sayHi.call(sam));
// console.log(colt.addNumber.call(sam, 1, 2, 3, 4));
// console.log(colt.addNumber.apply(sam, [1, 2, 3, 4])); //Apply parameters have to be in array
//that's the difference between call and apply

//Bind
function add(a, b) {
  return a + b;
}

var partialAdd = add.bind(this, 2);
console.log(add.bind(this, 2));
console.log(partialAdd(4));

function outerFunc(val) {
  var a = val;
  return function innerFunction(b) {
    return a + b;
  };
}

var add = outerFunc(4);
console.log(add(10));

//default binding
//here 'this' is the window object
//since function is within global scope or within window object

function showDimensions() {
  console.log(window.innerHeight);
  var width = this.innerWidth;
  var height = this.innerHeight;
  return [width, height];
}

console.log(showDimensions());

//borrowing function
//here call is used to borrow the method from person object and use for secondPerson obj

var person = {
  firstName: "Sam",
  secondName: "Cherian",
  getFullName: function() {
    return this.firstName + " " + this.secondName;
  }
};

var secondPerson = {
  firstName: "Jane",
  secondName: "Doe"
};

console.log(person.getFullName());
console.log(person.getFullName.call(secondPerson));

//changing context of this using new in Object constructor
function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

var personOne = new Person("Sam", "Cherian");
console.log(personOne);
