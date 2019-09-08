//What is the value of the keyword this in the following example:
var data = this;
console.log(data);
//Answer: window object

//What does this function output? Why?
function logThis() {
  return this;
}

console.log(logThis()); //function will output window object, because the function is in global scope and this will always point to the window object

//What does this function output? Why?
var instructor = {
  firstName: "Tim",
  sayHi: function() {
    console.log("Hello! " + this.firstName);
  }
};

console.log(instructor.sayHi()); // My answer: this will outpur "Hello! Tim", because here this context is the instructor object
//Actually answer it will outpur both "Hello! Tim" since its being consoled and undefined since the sayHi function is not returning anything.

//What does this function output? Why?
var instructor = {
  firstName: "Tim",
  info: {
    catOwner: true,
    boatOwner: true
  },
  displayInfo: function() {
    console.log(this);
    return "Cat owner? " + this.catOwner;
  }
};

console.log(instructor.displayInfo()); //I thought it will throw a refrence error the the obj instructor doesnt have
//the key catOwner but instead the it returned undefined

//What does this function output? Why?
var instructor = {
  firstName: "Tim",
  info: {
    catOwner: true,
    boatOwner: true,
    displayLocation: function() {
      console.log(this);
      return this.data.location;
    },
    data: {
      location: "Oakland"
    }
  }
};

instructor.info.displayLocation(); // this will return Oakland because this here refers to info object.

//What does this function output? Why?
var instructor = {
  firstName: "Tim",
  info: {
    catOwner: true,
    boatOwner: true,
    displayLocation: function() {
      return this.location;
    },
    data: {
      location: "Oakland",
      logLocation: this.displayLocation
    }
  }
};

// console.log(instructor.info.data.logLocation()); // Why might we be getting an error here?
//we are trying to call a method logLocation on data but it doesnt exist in data.

//Fix the following code:
var obj = {
  fullName: "Harry Potter",
  person: {
    sayHi: function() {
      return "This person's name is " + this.fullName;
    }
  }
};
console.log(obj.person.sayHi.call(obj));

function sumEvenArguments() {
  var count = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      count += arguments[i];
    }
  }
  console.log(count);
  return count;
}

// sumEvenArguments(1, 2);

//converting an array like objects to array using call on slice method
function arrayFrom(args) {
  return [].slice.call(args);
}

function sample() {
  var arr = arrayFrom(arguments);
  console.log(arr);
  if (!arr.reduce) throw "This is not an array!";
  return arr.reduce(function(acc, next) {
    return acc + next;
  }, 0);
}

// console.log(sample(2, 3, 5));

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

function invokeMax(fn, maxNum) {
  let limit = maxNum;
  let functionPassed = fn;
  let counter = 0;
  return function innerFunc(a, b) {
    counter++;
    if (counter > limit) {
      return "Maxed out";
    }
    return functionPassed(a, b);
  };
}

var addOnlyThreeTimes = invokeMax(multiply, 4);
console.log(addOnlyThreeTimes);
console.log(addOnlyThreeTimes(1, 2));
console.log(addOnlyThreeTimes(2, 2));
console.log(addOnlyThreeTimes(2, 8));
console.log(addOnlyThreeTimes(5, 6));
