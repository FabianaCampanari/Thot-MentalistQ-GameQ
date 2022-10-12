var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Well Done!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Invalid Number!";
  } else {
    elementoResultado.innerHTML = "Fail!";
  }
}