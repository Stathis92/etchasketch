document.body.onload = createGrid;

const setSize = document.querySelector("button");

setSize.addEventListener("click", () => {
  customSize();
});


function createGrid() {
  const gridContainer = document.getElementById("gridContainer");

  gridContainer.style.maxHeight = "480px";
  gridContainer.style.maxWidth = "480px";

  let customHeight = parseInt(gridContainer.style.maxHeight);
  let customWidth = parseInt(gridContainer.style.maxWidth);

  for (let i = 0; i < GRID_SIZE; i++) {
    const gridRow = document.createElement("div");
    gridRow.id = "gridRow" + i;
    gridRow.style.display = "flex";
    gridRow.style.flex = "row";
    gridContainer.appendChild(gridRow);

    for (let j = 0; j < GRID_SIZE; j++) {
      let newDiv = document.createElement("div");
      newDiv.id = "gridBox" + (i * GRID_SIZE + j);
      newDiv.style.width = (customWidth / GRID_SIZE) + "px";
      newDiv.style.height = (customHeight / GRID_SIZE) + "px";
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
  document.getElementById(position).style.backgroundColor = "black";
}

function customSize(){
  let input = prompt("Please enter Grid size (max 100):" );
  GRID_SIZE = input;
  const oldContainer = document.getElementById("gridContainer");
  const newContainer = document.createElement("div");
  newContainer.id = "gridContainer";
  document.body.insertBefore(newContainer, oldContainer);
  oldContainer.remove();
  createGrid();
}

let GRID_SIZE = 8;
