function random(number) {
  return Math.floor(Math.random() * number + 1);
}

const changecolor = () => {
  const randomColor = `rgb(${random(250)}, ${random(250)}, ${random(250)})`;
  document.body.style.backgroundColor = randomColor;
};

const changeColorBtn = document.getElementsByClassName("btn");
console.log(changeColorBtn[0]);
changeColorBtn[0].addEventListener("click", changecolor);
