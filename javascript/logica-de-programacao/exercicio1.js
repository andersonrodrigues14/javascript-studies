//! EXERCICIO 1
/*
    - Crie um programa que:
        - Armazene a largura e o comprimento de um retângulo
        - Calcula o perímetro do retângulo (soma dos lados)
        - Calcula a área do retângulo
        - Imprime os resultados no console
*/

let largura = 8;
let comprimento = 12;

let perimetro = 2 * (largura + comprimento);
let area = largura * comprimento;

console.log(`O perímetro do retângulo é ${perimetro}.`);
console.log(`A área do retângulo é ${area}.`);