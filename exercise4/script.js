const highLight = () => {
  var paragraph = document.getElementById("textHighlight");
  paragraph.style.backgroundColor = "yellow";
  paragraph.innerHTML = "This is real text";
};
const changeText = () => {
  var change = document.getElementById("Welcome");
  console.log(change);
  change.innerHTML = "Hi student";
};

const changeButton = document.getElementById("btn");

changeButton.addEventListener("click", highLight);
changeButton.addEventListener("click", changeText);
