const btn = document.getElementById("addBox");
const container = document.getElementById("container");

let i = 0;

function addBox() {
  i++;
  const box = document.createElement("div");

  box.classList.add("box");
  box.innerText = i;

  //   document.body.appendChild(box);
  container.appendChild(box);
}

btn.addEventListener("click", addBox);
