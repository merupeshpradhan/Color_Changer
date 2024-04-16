// const colors = document.querySelectorAll(".color");

const container = document.querySelector("#container");
const allColors = document.querySelector("#allColors");

var colors = ["red", "green", "yellow","pink"];

colors.forEach(function (color) {
  const div = document.createElement("div");
  // console.log(color);
  div.style.backgroundColor = color;
  div.id = color;
  div.style.height = "3.5rem";
  div.style.width = "3.5rem";
  div.style.margin = "0.25rem";
  div.style.borderRadius = "0.2rem";

  div.addEventListener("click", function (e) {
    container.style.backgroundColor = e.target.style.backgroundColor;
  });

  allColors.appendChild(div);
});
