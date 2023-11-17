const highLight = () => {
  var paragraph = document.getElementById("textHighlight");

  paragraph.style.backgroundColor = "yellow";
  //   console.log(highLight);
};

const changeButton = document.getElementById("btn");

changeButton.addEventListener("click", highLight);
