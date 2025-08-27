// Escreva um programa para criar uma
// Collection Array do tipo number, 
// inicializada com 10 valores inteiros. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro
// e caso ele seja encontrado no Array, 
// exiba na tela a posição deste número na Collection.
//  Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import leia = require('readline-sync');

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

let numero: number = leia.questionInt('Digite o número que você deseja encontrar: ');

if (numeros.includes(numero)) {
    let posicao: number = numeros.indexOf(numero);
    console.log(`O número ${numero} foi encontrado na posição ${posicao}.`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}