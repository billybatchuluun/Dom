const draggableBox = document.getElementById("box");
const dropTarget = document.getElementById("dropArea");

draggableBox.addEventListener("dragstart", (event) => {
  console.log(dragstart);
});

//Drag the element and drop the element on “Drop here” box zone
