let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let operacao = prompt("Digite a operação (+, -, *, /):");

let resultado;

if (operacao === "/" && num2 === 0) {
  resultado = "Erro: divisão por zero";
} else if (operacao === "+") {
  resultado = num1 + num2;
} else if (operacao === "-") {
  resultado = num1 - num2;
} else if (operacao === "*") {
  resultado = num1 * num2;
} else if (operacao === "/") {
  resultado = num1 / num2;
} else {
  resultado = "Operação inválida";
}

alert("Resultado: " + resultado);