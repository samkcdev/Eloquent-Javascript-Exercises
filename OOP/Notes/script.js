//for in iteration

var instructor = {
  name: "Sam",
  knowsJs: true,
  knowAngular: true
};

for (var info in instructor) {
  console.log(instructor[info]);
}

//Check if key exists using if..in

var sampleObj = {
  name: "sam",
  favBook: "Animal Farm"
};

if ("favBook" in sampleObj) {
  console.log("Fav book exists");
}
