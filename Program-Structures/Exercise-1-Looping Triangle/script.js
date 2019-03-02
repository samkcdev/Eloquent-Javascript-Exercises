//Exercises:

//Looping a triangle
//my solution
let hash = "";
let parentDiv = document.getElementById("triangleLoop");
for (let i = 0; i < 7; i++) {
  hash += "#";
  let span = document.createElement("DIV");
  let hashOutput = document.createTextNode(hash);
  span.appendChild(hashOutput);
  parentDiv.appendChild(span);
  console.log(hash);
}
//author solution
for (let line = "#"; line.length < 8; line += "#") console.log(line);
