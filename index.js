let prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
nota1 += parseFloat(prompt("Digite sua segunda nota: "));
nota1 += parseFloat(prompt("Digite sua terceira nota: "));
let media = (nota1)/3

media >= 7 ? console.log("Aprovado") : console.log("Reprovado")

let nota2 = parseFloat(prompt("Digite sua primeira nota: "));
nota2 += parseFloat(prompt("Digite sua segunda nota: "));

let media2 = 21-nota2
console.log(media2)
