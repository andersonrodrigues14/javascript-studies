//! EXERCICIO 2 
/*
    ESCREVA UM CÓDIGO QUE EXIBA "BOM DIA", "BOA TARDE" OU
    "BOA NOITE" COM BASE EM UMA VALOR DE VARIÁVEL HORA.
*/

let hora = 12;

if (hora > 12){
    console.log("Bom dia!");
} else if (hora < 19 ) { 
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}