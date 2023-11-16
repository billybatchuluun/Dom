const input1 = document.getElementById("window1");
const input2 = document.getElementById("window2");
const input3 = document.getElementById("window3");

input3 = input1 + input2;

function btn1() {
  input3;
}

function window1() {
  console.log(input1.value);
}
function window2() {
  console.log(input2.value);
}
function window3() {
  console.log(input3.value);
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", window1);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", window1);
