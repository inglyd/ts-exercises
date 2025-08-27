import leia = require('readline-sync');

let numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let numero: number = leia.questionInt("Digite um número inteiro para procurar: ");

if (numeros.has(numero)) {
    console.log(`O número ${numero} foi encontrado!`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}
