document.body.onload = createGrid;

function createGrid() {
  const gridContainer = document.getElementById("gridContainer");

  gridContainer.style.maxHeight = "480px";
  gridContainer.style.maxWidth = "480px";

  for (let i = 0; i < GRID_SIZE; i++) {
    const gridRow = document.createElement("div");
    gridRow.id = "gridRow" + i;
    gridRow.style.display = "flex";
    gridRow.style.flex = "row";
    gridContainer.appendChild(gridRow);

    for (let j = 0; j < GRID_SIZE; j++) {
      let newDiv = document.createElement("div");
      newDiv.id = "gridBox" + (i * GRID_SIZE + j);
      newDiv.style.width = "30px";
      newDiv.style.height = "30px";
      newDiv.style.border = "solid";
      newDiv.style.borderWidth = "1px";

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

let GRID_SIZE = 16;
