//Select the section with an id of container without using querySelector.

document.getElementById("container");

//Select the section with an id of container using querySelector.

document.querySelector("#container");

//Select all of the list items with a class of "second".

document.querySelector(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

var ol = document.querySelector("ol .third");

//Give the section with an id of container the text "Hello!".

// document.getElementById("container").innerText = "Hello";

//Add the class main to the div with a class of footer.

var footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main");

//Create a new li element.

var newLi = document.createElement("LI");
var ulList = document.querySelector("ul");
newLi.innerText = "Four";
ulList.appendChild(newLi);

//Loop over all of the lis inside the ol tag and give them a background color of "green".
//Even list will be teal-Thats from my side

var oL = document.querySelectorAll("ol li");
//Note:querySelectorAll returns a NodeList we can use length on that.
console.log(oL);

for (let a = 0; a < oL.length; a++) {
  if (a % 2 === 0) {
    oL[a].style.backgroundColor = "brown";
  } else {
    oL[a].style.backgroundColor = "teal";
  }
}

//Remove the div with a class of footer.

footer.remove();
