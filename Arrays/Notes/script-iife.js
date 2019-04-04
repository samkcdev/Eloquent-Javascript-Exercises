//The below code is called a IIFE
//it gets immedialely after its written
//dont have to invoke it separately
var result = (function() {
  let person = "Sam";
  return person;
})();

console.log(result);

// another example
(function(firstName, lastName) {
  return firstName + lastName;
})("Sam", "Cherian");
