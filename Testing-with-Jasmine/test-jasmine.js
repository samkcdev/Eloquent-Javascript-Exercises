// var earth = {
//   isround: true,
//   positionFromSun: 3,
//   density: 5.5
// };

// describe("Earth", function() {
//   it("is round", function() {
//     expect(earth.isround).toEqual(true);
//   });
//   it("third from Sun", function() {
//     expect(earth.positionFromSun).toEqual(3);
//   });
//   it("density", function() {
//     expect(earth.density).toEqual(5.5);
//   });
// });

//Testing exercise One

//Write a function called replaceWith that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case sensitive

// describe("replacewith", function() {
//   it("is case sensitive", function() {
//     expect(replaceWith("awesome", "e", "b")).toEqual("awesome", "e", "b");
//   });
// });

function replaceWith(string, displacedChar, newChar) {
  var splitString = string.split("");
  //   console.log(splitString);
  let chars = "";
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === displacedChar) {
      chars += splitString.splice(0, i, newChar);
    }
  }
  console.log(chars);
  console.log(splitString);
}

replaceWith("awesome", "e", "b");
