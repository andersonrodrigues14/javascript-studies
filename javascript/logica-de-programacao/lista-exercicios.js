// Soma de Números Crie um algoritmo que some dois números e exiba o resultado no console.
let numero1 = 10;
let numero2 = 20;
let resultado = numero1 + numero2;
console.log(`A soma é : ${resultado}`);
console.log("----------------------------------------------------------------");

// Validação de Idade Faça um programa que determine se uma idade predefinida é maior ou menor de 18 anos e exiba 
// a mensagem correspondente.
let idade = 18

if (idade >= 18) {
    console.log("Você é maior de idade!");
} else { 
    console.log("Você é menor de idade!");
}
console.log("----------------------------------------------------------------");

// Tabuada Desenvolva um algoritmo que exiba a tabuada de um número predefinido, do 1 ao 10.
let tabuada = 2;
console.log(`TABUADA DO ${tabuada}`)
for (let i=0; i<=10; i++){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}
console.log("----------------------------------------------------------------");

// Par ou Ímpar Crie um programa que verifica se um número predefinido é par ou ímpar e exiba a resposta no console.
let parOuImpar = 4

if (parOuImpar % 2 === 0 ) {
    console.log(`O numero ${parOuImpar} é par!`);
} else {
    console.log(`O numero ${parOuImpar} é impar!`);
}
console.log("----------------------------------------------------------------");

// Calculadora de Média Desenvolva um algoritmo que calcule a média de três notas predefinidas e determine se o aluno
//  foi aprovado ou reprovado (média mínima: 7).
let nota1 = 8
let nota2 = 7
let nota3 = 9

let media = ( nota1 + nota2 + nota3 ) / 3

if ( media >= 7 ){
    console.log(`Aprovado : ${media}`);
} else {
    console.log(`Reprovado: ${media}`);
}
console.log("----------------------------------------------------------------");

// Descubra o Maior Número Escreva um algoritmo que compare três números predefinidos e determine qual deles é o maior.
let a = 5;
let b = 8;
let c = 3;
let maior = a;
if (b > maior) {
  maior = b;
}
if (c > maior) {
  maior = c;
}
console.log("O maior número é " + maior);