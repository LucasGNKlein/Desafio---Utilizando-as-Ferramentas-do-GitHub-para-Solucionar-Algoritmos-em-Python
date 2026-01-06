let texto = prompt("Digite uma palavra ou frase:");

let tratado = texto.replace(/ /g, "").toLowerCase();
let invertido = tratado.split("").reverse().join("");

alert(tratado === invertido
  ? `"${texto}" é um palíndromo.`
  : `"${texto}" não é um palíndromo.`
);