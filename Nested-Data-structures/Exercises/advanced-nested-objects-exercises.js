var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13]
    },
    addSnack: function(snack) {
      console.log("This is this " + this);
      this.snacks.push(snack);
      return this;
    }
  }
};

console.log("This is outer this " + this);
//Using a for loop, console.log all of the numbers in the primeNumbers array.

var objPrimeNumbers = nestedData.innerData.numberData.primeNumbers;
var objEvenFiboNumbs = nestedData.innerData.numberData.fibonnaci;
for (let i = 0; i < objPrimeNumbers.length; i++) {
  console.log("Prime Number are: " + objPrimeNumbers[i]);
}

//Using a for loop, console.log all of the even Fibonnaci numbers.

for (let i = 0; i < objEvenFiboNumbs.length; i++) {
  if (objEvenFiboNumbs[i] % 2 === 0) {
    console.log("Odd Fibonacci Number are: " + objEvenFiboNumbs[i]);
  }
}

//Console.log the value "second" inside the order array.
var orderArr = nestedData.innerData.order;
console.log(orderArr[1]);

//Invoke the addSnack function and add the snack "chocolate".
var objFunc = nestedData.innerData.addSnack("chocolate");
console.log(objFunc);

var nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
        hello: "Hola"
      },
      french: {
        hello: "Bonjour"
      }
    }
  }
};

// Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

function addSpeaker(speakerName) {
  var speakerObj = nestedObject.speakers;
  speakerObj.push({ name: speakerName });
  console.log(speakerObj);
}

addSpeaker("Sam");
addSpeaker("James Bond");

//Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

function addLanguage() {}
