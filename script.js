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

    for (let k = 0; k < GRID_SIZE; k++) {
      const newDiv = document.createElement("div");
      newDiv.id = "gridBox" + k;
      newDiv.style.width =  "24px";
      newDiv.style.height = "24px";
      newDiv.style.border = "solid";
    
      document.getElementById(gridRow.id).appendChild(newDiv);
    }
  }
}

let GRID_SIZE = 16;
