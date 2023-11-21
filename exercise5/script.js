const box = document.querySelector(".box");
const changeColor = () => {
  if (box.style.backgroundColor === "red");
  return (box.style.backgroundColor = "green");
  return box.style.backgroundColor === "red";
};

const changeButton = document.querySelector(".btnChange");
console.log(changeButton);

changeButton.addEventListener("click", changeColor);
