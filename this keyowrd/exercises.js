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

console.log(instructor.info.data.logLocation()); // Why might we be getting an error here?
//we are trying to call a method logLocation on data but it doesnt exist in data.
