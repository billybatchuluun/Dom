function createCircles() {
  var number = document.getElementById("enterNumbers").value;
  const container = document.querySelector(".container");
  console.log("container", container);

  document.getElementById("circleContainer").innerHTML = "";
  function generateRandomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  }
  console.log(number);
  // element uusgeh
  const circle = document.createElement("div");
  // container dotor nemj bgaa heseg
  container.appendChild(circle);
  // circle element dotor class nemeh
  circle.classList.add("circle");

  //   for (let i = 0; i < number; i++) {
  //     const circle = document.createElement("div");
  //     circle.className = "circle";
  //     circle.style.backgroundColor = generateRandomColor();
  //     circleContainer.appendChild(circle);
  //   }
}
let button = document.getElementById("btn");
button.addEventListener("click", createCircles);
