"use stricte";

/* By Erickay.dev@gmail.com*/
const changeColor = document.querySelector("#radom-color-btn");
const bgColor = document.querySelector("body");
const showColorCode = document.querySelector("#color-code");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  bgColor.style.backgroundColor = color;
  showColorCode.style.color = color;
  showColorCode.textContent = color;
  // return color;
  // console.log(color);
}

changeColor.addEventListener("click", getRandomColor);
