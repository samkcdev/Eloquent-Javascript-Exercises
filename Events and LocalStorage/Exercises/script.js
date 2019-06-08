window.addEventListener("DOMContentLoaded", function() {
  let heading = document.getElementById("change_heading");
  heading.innerText = "Hello World";

  let selectedColor = document.querySelector(".selected");
  let colorSection = document.querySelector("section");
  //colored Boxes
  //   let colorBoxBrown = document.querySelector(".brown");
  //   let colorBoxGreen = document.querySelector(".green");
  //   let colorBoxBlue = document.querySelector(".blue");
  //   let colorBoxYellow = document.querySelector(".yellow");

  //   colorBoxBrown.addEventListener("mouseover", function() {
  //     selectedColor.innerText = colorBoxBrown.className;
  //   });

  //   colorBoxGreen.addEventListener("mouseover", function() {
  //     selectedColor.innerText = colorBoxGreen.className;
  //   });

  //   colorBoxBlue.addEventListener("mouseover", function() {
  //     selectedColor.innerText = colorBoxBlue.className;
  //   });

  //   colorBoxYellow.addEventListener("mouseover", function() {
  //     selectedColor.innerText = colorBoxYellow.className;
  //   });

  //the above commented code can be written more efficiently like this
  colorSection.addEventListener("mouseover", function(event) {
    selectedColor.innerText = event.target.className;
  });

  //adding new div with class purple
  let purpleDiv = document.createElement("DIV");
  purpleDiv.setAttribute("class", "purple");
  colorSection.appendChild(purpleDiv);

  //Race car
  let carOne = document.querySelector(".car1");
  let carTwo = document.querySelector(".car2");
  carOne.style.marginLeft = 0;
  carTwo.style.marginLeft = 0;

  let raceStarterBtn = document.querySelector("button");
  //   function reset(carOne, carTwo) {
  //     clearTimeout(carOne.timer);
  //     clearTimeout(carTwo.timer);
  //     carOne.style.marginLeft = 0;
  //     carTwo.style.marginLeft = 0;
  //   }

  //   raceStarterBtn.addEventListener("click", function() {
  //     carOne.timer = setInterval(function() {
  //       carOne.style.marginLeft =
  //         parseInt(carOne.style.marginLeft) + Math.random() * 60 + "px";
  //       if (parseInt(carOne.style.marginLeft) > window.innerWidth) {
  //         alert("Yeah, I win");
  //         reset(carOne, carTwo);
  //       }
  //     }, 60);

  //     carTwo.timer = setInterval(function() {
  //       carTwo.style.marginLeft =
  //         parseInt(carTwo.style.marginLeft) + Math.random() * 60 + "px";
  //       if (parseInt(carTwo.style.marginLeft) > window.innerWidth) {
  //         alert("Yeah, I win");
  //         reset(carOne, carTwo);
  //       }
  //     }, 60);
  //   });

  carOne.style.marginLeft = 0;
  carTwo.style.marginLeft = 0;

  function reset(carOne, carTwo) {
    clearTimeout(carOne.timer);
    clearTimeout(carTwo.timer);
    carOne.style.marginLeft = 0;
    carTwo.style.marginLeft = 0;
  }

  raceStarterBtn.addEventListener("click", function() {
    carOne.timer = setInterval(function() {
      carOne.style.marginLeft =
        parseInt(carOne.style.marginLeft) + Math.random() * 60 + "px";
      if (parseInt(carOne.style.marginLeft) > window.innerWidth) {
        alert("Yes, I win-car one");
        reset(carOne, carTwo);
      }
    }, 60);
    carTwo.timer = setInterval(function() {
      carTwo.style.marginLeft =
        parseInt(carTwo.style.marginLeft) + Math.random() * 60 + "px";
      if (parseInt(carTwo.style.marginLeft) > window.innerWidth) {
        alert("Yes, I win-car two");
        reset(carOne, carTwo);
      }
    }, 60);
  });
});
