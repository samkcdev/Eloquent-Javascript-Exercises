var instructorData = {
  name: "Elie",
  additionalData: {
    instructor: true,
    favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
    moreDetails: {
      favoriteBasketballTeam: "New York Knicks",
      numberOfSiblings: 3,
      isYoungest: true,
      hometown: {
        city: "West Orange",
        state: "NJ"
      },
      citiesLivedIn: ["Seattle", "Providence", "New York"]
    }
  }
};

console.log(instructorData.name);
console.log(instructorData.additionalData.favoriteHobbies[2]);
console.log(instructorData.additionalData.moreDetails.favoriteBasketballTeam);
console.log(instructorData.additionalData.moreDetails.hometown.state);
console.log(instructorData.additionalData.moreDetails.citiesLivedIn);

//Write a function called displayCities that console.logs all the values in the citiesLivedIn array:
function displayCities() {
  for (
    var i = 0;
    i < instructorData.additionalData.moreDetails.citiesLivedIn.length;
    i++
  ) {
    console.log(instructorData.additionalData.moreDetails.citiesLivedIn[i]);
  }
}

displayCities();

//Write a function called displayHometownData that console.logs all the values inside of the hometown object

function displayHometownData() {
  var homeTownList = instructorData.additionalData.moreDetails.hometown;
  for (key in homeTownList) {
    console.log(homeTownList[key]);
  }
}

displayHometownData();

//write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

function addDetail(key, val) {
  var moredetails = instructorData.additionalData.moreDetails;
  moredetails[key] = val;
  return moredetails;
  // console.log(moredetails);
}

addDetail("isHilarous", true);
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);

//let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples).

function revmoeDetail(keyToBeRemoved) {
  var moredetails = instructorData.additionalData.moreDetails;
  // console.log(moredetails[keyToBeRemoved]);
  // delete moredetails[keyToBeRemoved];

  if (keyToBeRemoved in moredetails) {
    delete moredetails[keyToBeRemoved];
    console.log(keyToBeRemoved + " has been deleted");
  }
  console.log(moredetails);
}

revmoeDetail("previousApartments");
revmoeDetail("isHilarous");
revmoeDetail("isHilarous");
