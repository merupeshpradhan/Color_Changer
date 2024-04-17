const container = document.querySelector("#container");
const allColors = document.querySelector("#allColors");
const form = document.querySelector("form");
const colorInput = document.querySelector("#colorInput");

let colors = ["red", "green", "yellow", "pink"];

function updateColorList() {
  allColors.innerHTML = "";

  colors.forEach(function (color) {
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.id = color;
    div.style.height = "3.5rem";
    div.style.width = "3.5rem";
    div.style.margin = "0.25rem";
    div.style.borderRadius = "0.2rem";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.cursor = "pointer";

    div.addEventListener("click", function (e) {
      container.style.backgroundColor = e.target.style.backgroundColor;
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.style.fontSize = "12px";
    deleteButton.style.fontWeight = "600";
    deleteButton.style.color = "white";
    deleteButton.style.border = "1px solid white";
    deleteButton.addEventListener("click", function (e) {
      const colorToRemove = e.target.parentNode.id;
      colors = colors.filter((c) => c !== colorToRemove);
      updateColorList();
    });
    div.appendChild(deleteButton);
    allColors.appendChild(div);
  });
}

updateColorList();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newColor = colorInput.value.trim();

  if (newColor) {
    colors.push(newColor);
    updateColorList();
    colorInput.value = "";
  }
});
