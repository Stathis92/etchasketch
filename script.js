document.body.onload = createGrid;

const findButton = document.getElementById("clear");

//
const customButtons = document.querySelectorAll(".options");

findButton.addEventListener("click", () => {
  clearSketch();
});

customButtons.forEach((button) => {
  button.addEventListener("click", () => {
    customSize(button.id);
  });
});

function createGrid() {
  const gridContainer = document.getElementById("gridContainer");

  //All container CSS
  gridContainer.style.maxHeight = "960px";
  gridContainer.style.maxWidth = "960px";
  gridContainer.style.borderStyle = "solid";
  gridContainer.style.borderWidth = "5px";
  gridContainer.style.marginTop = "50px";
  gridContainer.style.backgroundColor = "#F6F4EB";
  let customHeight = parseInt(gridContainer.style.maxHeight);
  let customWidth = parseInt(gridContainer.style.maxWidth);

  //Create Rows
  for (let i = 0; i < GRID_SIZE; i++) {
    const gridRow = document.createElement("div");
    gridRow.id = "gridRow" + i;
    gridRow.style.display = "flex";
    gridRow.style.flex = "row";
    gridContainer.appendChild(gridRow);

    //Create Columns
    for (let j = 0; j < GRID_SIZE; j++) {
      let newDiv = document.createElement("div");
      newDiv.id = "gridBox" + (i * GRID_SIZE + j);

      //Calculate the cell size
      newDiv.style.width = customWidth / GRID_SIZE + "px";
      newDiv.style.height = customHeight / GRID_SIZE + "px";

      //Create Outline instead of borders
      newDiv.style.outline = "1px";
      newDiv.style.outlineStyle = "solid";

      document.getElementById(gridRow.id).appendChild(newDiv);

      document.getElementById(newDiv.id).onmouseover = function () {
        mouseOver(newDiv.id);
      };
    }
  }
}

function mouseOver(position) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById(position).style.backgroundColor = "#" + randomColor;
}

function customSize(size) {
  getSize(size);
  createContainer();
  createGrid();
}

function clearSketch() {
  createContainer();
  createGrid();
}

//Function to create a new container in the same position as the last one
//delete the old one
function createContainer() {
  const oldContainer = document.getElementById("gridContainer");
  const newContainer = document.createElement("div");
  newContainer.id = "gridContainer";
  document.body.insertBefore(newContainer, oldContainer);
  oldContainer.remove();
}

function getSize(size) {
  switch (size) {
    case "size1":
      let input = prompt("Please enter Grid size (max 100):");
      while (input > 100 || input < 1 || isNaN(input)) {
        input = prompt("Please enter Grid size (max 100):");
      }
      GRID_SIZE = input;
      break;
    case "size2":
      GRID_SIZE = 16;
      break;
    case "size3":
      GRID_SIZE = 32;
      break;
    case "size4":
      GRID_SIZE = 64;
      break;
  }
}

//Initial grid size on page load
let GRID_SIZE = 16;
