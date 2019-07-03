//Part I
//Use the following object for this set of questions:

var users = [
  {
    username: "larry",
    email: "larry@foo.com",
    yearsExperience: 22.1,
    favoriteLanguages: ["Perl", "Java", "C++"],
    favoriteEditor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
      city: "San Francisco",
      state: "CA"
    }
  },
  {
    username: "jane",
    email: "jane@test.com",
    yearsExperience: 33.9,
    favoriteLanguages: ["Haskell", "Clojure", "PHP"],
    favoriteEditor: "Emacs",
    hobbies: ["Swimming", "Biking", "Hiking"],
    hometown: {
      city: "New York",
      state: "NY"
    }
  },
  {
    username: "sam",
    email: "sam@test.com",
    yearsExperience: 8.2,
    favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
    favoriteEditor: "Atom",
    hobbies: ["Golf", "Cooking", "Archery"],
    hometown: {
      city: "Fargo",
      state: "SD"
    }
  },
  {
    username: "anne",
    email: "anne@test.com",
    yearsExperience: 4,
    favoriteLanguages: ["C#", "C++", "F#"],
    favoriteEditor: "Visual Studio Code",
    hobbies: ["Tennis", "Biking", "Archery"],
    hometown: {
      city: "Albany",
      state: "NY"
    }
  },
  {
    username: "david",
    email: "david@test.com",
    yearsExperience: 12.5,
    favoriteLanguages: ["JavaScript", "C#", "Swift"],
    favoriteEditor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
      city: "Los Angeles",
      state: "CA"
    }
  }
];

//Write a function called printEmails which console.log's each email for the users.
function printEmails() {
  users.forEach(function(val) {
    console.log(val.email);
  });

  // console.log(userEmails);
}

printEmails();

//Write a function called printHobbies which console.log's each hobby for each user.

function printHobbies() {
  users.map(function(val) {
    return val.hobbies.forEach(function(val) {
      console.log(val);
    });
  });
}

printHobbies();

// Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

function findHometownByState(userstate) {
  var filterByState = users.find(function(val) {
    return val.hometown.state === userstate;
  });
  console.log(filterByState);
}

findHometownByState("CA");

//Write a function called allLanguages which returns an array of all of the unique values
function allLanguages() {
  var newLangsArr = [];
  users.map(function(val) {
    return val.favoriteLanguages.forEach(function(val) {
      newLangsArr.push(val);
    });
  });

  var uniquLangs = newLangsArr.reduce(function(acc, currentVal) {
    if (acc.indexOf(currentVal) === -1) {
      acc.push(currentVal);
    }

    return acc;
  }, []);

  console.log(uniquLangs);
  return uniquLangs;
}

allLanguages();

//Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in

function hasFavoriteEditor(editor) {
  var booleanEditor = users.some(function(val) {
    return val.favoriteEditor === editor;
  });
  console.log(booleanEditor);
}

hasFavoriteEditor("Eclipse");

//Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
function findByUsername(name) {
  var firstuser = users.find(function(val) {
    return val.username === name;
  });
  console.log(firstuser);
  return firstuser;
}

findByUsername("sam");

//PART TWO

//Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).

function vowelCount(string) {
  var stringSplit = string.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var counter = 0;

  var vowelobj = stringSplit.reduce(function(acc, nextVal) {
    if (vowels.includes(nextVal)) {
      acc[nextVal] = counter++;
    }

    return acc;
  }, {});
  console.log(vowelobj);
}

vowelCount("awesome man");

//Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).

function removeVowels(string) {
  var stringSplit = string.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelobj = stringSplit.reduce(function(acc, nextVal) {
    if (vowels.includes(nextVal)) {
      acc.push(nextVal);
    }

    return acc;
  }, []);
  console.log(vowelobj);
}

removeVowels("amazing");
