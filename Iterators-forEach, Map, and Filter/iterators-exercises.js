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
function allLanguages() {}
