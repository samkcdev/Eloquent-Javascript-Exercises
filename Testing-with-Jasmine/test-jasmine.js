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
//     expect(replaceWith("for Me", "e", "b")).toBe("for Mb");
//   });
// });

// function replaceWith(string, displacedChar, newChar) {
//   var splitString = string.split("");
//   for (let i = 0; i < splitString.length; i++) {
//     if (splitString[i] === displacedChar) {
//       splitString[i] = newChar;
//     }
//   }
//   var newString = splitString.join("");
//   return newString;
// }

//Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified

describe("expand", function() {
  it("returns any array", function() {
    expect(expand([1, 2, 3], 3)).toBe(jasmine.any(Array));
  });
});

function expand(arr, repeatArr) {
  var newArr = [];
  for (let i = 0; i < repeatArr; i++) {
    newArr.push(arr.slice(0, arr.length));
  }
  console.log(newArr);
}
