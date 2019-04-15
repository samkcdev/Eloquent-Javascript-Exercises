//Part One
//difference

function difference(numOne, numOne) {
  return numOne - numOne;
}

difference(2, 2);

// product

function product(numbOne, numbTwo) {
  return numbOne * numbTwo;
}
product(2, 2);

//printDay

//this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

function printDay(dayNumb) {
  var days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  };
  console.log(days[dayNumb]);
}

printDay(5);
printDay(8);
//thought of using for loop with this, by comparing parameter with a number

//lastElement

//this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElement(arrParam) {
  let lastEle = arrParam[arrParam.length - 1];

  console.log(lastEle);
}

lastElement([2, 3, 4]);
lastElement([]);

//numberCompare
// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
function numberCompare(fisrstNum, secondNum) {
  if (fisrstNum > secondNum) {
    console.log("First is greater");
  } else if (fisrstNum < secondNum) {
    console.log("Second is greater");
  } else {
    console.log("Numbers are equal");
  }
}

numberCompare(1, 1);
numberCompare(2, 1);
numberCompare(1, 2);

//singleLetterCount
//this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount(word, letter) {
  var count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  console.log(count);
}

// singleLetterCount("Adam", "b");

//PART 2
//multipleLetterCount

//this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
//need to understand this
function multipleLetterCount(wordParam) {
  let letterObj = {};
  for (let i = 0; i < wordParam.length; i++) {
    // console.log(wordParam[i]);
    if (!(wordParam[i] in letterObj)) {
      console.log((letterObj[wordParam[i]] = 1));
    } else {
      letterObj[wordParam[i]]++;
    }
  }
  console.log(letterObj);
}

multipleLetterCount("hello");
