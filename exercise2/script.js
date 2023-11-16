const refresh = () => {
  const random1Input = document.getElementById("random1");
  const random2Input = document.getElementById("random2");

  random1Input.value = Math.floor(Math.random() * 100) + 1;
  random2Input.value = Math.floor(Math.random() * 100) + 1;

  document.getElementById("sum").value = "";
};

const isEqual = () => {
  const random1Input = document.getElementById("random1");
  const random2Input = document.getElementById("random2");

  const sumInput = document.getElementById("sum");

  let sumOfTwoRandNum = Number(random1Input.value) + Number(random2Input.value);
  let inputNum = Number(sumInput.value);

  if (sumOfTwoRandNum === inputNum) alert("It is true");
  else alert("It is false");
};

const checkButton = document.getElementById("checkBtn");
checkButton.addEventListener("click", isEqual);
const refreshbtn = document.getElementById("refreshBtn");
refreshbtn.addEventListener("click", refresh);
