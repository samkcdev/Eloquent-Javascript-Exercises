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
    expect(expand(["fruits", "vegetables"], 4)).toEqual(jasmine.any(Array));
  });
});

function expand(arr, repeatArr) {
  var newArr = [];
  for (let i = 0; i < repeatArr; i++) {
    newArr.push(arr.slice(0, arr.length));
  }
  newCompleteArr = [].concat.apply([], newArr);
  return newCompleteArr;
}

//Write a function called acceptNumbersOnly which takes in any number of arguments and returns true if all of them are numbers. Watch out for NaN - it is a typeof "number"!

describe("acceptNumbersOnly", function() {
  it("Allows only numbers", function() {
    expect(acceptNumbersOnly(1, 223, 45)).toEqual(jasmine.any(Number));
  });
});

function acceptNumbersOnly() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    return typeof arguments[i] === Number;
  }
}
