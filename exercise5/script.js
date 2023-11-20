const colors = ["red", "green", "blue"];

const changeColor = () => {
  const box = document.querySelector(".box");
  console.log(box);

  //   if (box.style.backgroundColor == "red") {
  //     box.style.backgroundColor = "green";
  //   } else box.style.backgroundColor = "blue";
  //   if (box.style.backgroundColor == "green") {
  //     box.style.backgroundColor = "blue";
  //   }

  //   if (box.style.backgroundColor === "red");
  //   return box.style.backgroundColor === "green";
  //   return box.style.backgroundColor === "red";
  //   let count = 0;
  //   if (count < colors.length) {
  //     box.style.backgroundColor = colors[count];
  //     count++;
  //   }
};
// const changeButton = document.getElementsByClassName("btnChange");
const changeButton = document.querySelector(".btnChange");
console.log(changeButton);

changeButton.addEventListener("click", changeColor);
ß;
