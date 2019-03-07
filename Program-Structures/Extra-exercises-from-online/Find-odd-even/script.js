let numbers = "";
let displayNum = document.getElementById("displayNum");

for (let i = 0; i < 15; i++) {
  numbers = i;

  let li = document.createElement("LI");
  let textNode = document.createTextNode(numbers);
  li.appendChild(textNode);
  displayNum.appendChild(li);

  if (numbers % 2 == 0) {
    li.className += "even-number";
    let paraEven = document.getElementById("even");
    paraEven.innerHTML += numbers + " ";
  } else {
    li.className += "odd-number";
    let paraOdd = document.getElementById("odd");
    paraOdd.innerHTML += numbers + " ";
  }
}

//things I learned in this
//adding content into ul via js
//adding class to a element coditionally
//showing one number after another in html
