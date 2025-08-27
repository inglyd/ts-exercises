// Escreva um programa para criar uma Collection Set do tipo number.
//  O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos 
//  e adicione - os individualmente na Collection Set.
//  Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set.

import leia = require('readline-sync');

const numeros: Set<number> = new Set<number>();

console.log("Digite 10 números inteiros não repetidos:");

for (let i = 0; i < 10; i++) {
    let numero: number = leia.questionInt(`Digite o número ${i + 1}: `);

    if (numeros.has(numero)) {
        console.log(`O número ${numero} já foi digitado. Ele não será adicionado.`);
    } else {
        numeros.add(numero);
    }
}

console.log("\nListar dados do Set: ");
console.log(numeros);