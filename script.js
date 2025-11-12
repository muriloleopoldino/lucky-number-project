const luckyButton = document.querySelector("button");

function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-number1").value);
  const max = Math.floor(document.querySelector(".input-number2").value);

  if (min >= max) {
    alert("O valor mínimo tem que ser MENOR que o valor máximo");
  } else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
  }
}

luckyButton.addEventListener("click", generateNumber);
