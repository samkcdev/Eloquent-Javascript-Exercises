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

console.log(colt.sayHi.call(sam));
console.log(colt.addNumber.call(sam, 1, 2, 3, 4));
console.log(colt.addNumber.apply(sam, [1, 2, 3, 4])); //Apply parameters have to be in array
//that's the difference between call and apply
