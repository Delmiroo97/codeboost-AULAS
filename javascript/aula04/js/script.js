
// Operadores Aritiméticos

let soma = 5 + 10; // Soma 
let subtracao = 10 - 5; // Subtração  
let divisao = 10 / 2; // Divisão 
let multiplicacao = 10 * 5; // Multiplicação 
let expoente = 2 ** 4; // Expoente 
let pi = 3.14;  // Valor do pi 

// console.log(pi);

let numero = 10; // number

let medida = 'litros' // string 

let qtdCombustivel = numero + medida;  // concatenação de number + string = string (10litros)

let resultado = qtdCombustivel / 2;

// console.log(resultado); // NaN (não é um numero)

// Ordem de operação 

let resultado01 = 10 + 3 * 6;  // 28 (divisão, multiplicação, soma e subtração)

let resultado02 = (10 - 3) * 6; // 42 (divisão, multiplicação, soma e subtração)

let resultado03 = 10 / 2 * 7;  // 35 (divisão, multiplicação, soma e subtração)

let resultado04 = 20 + 20 * 3 + 5 / 2; // 82.5 (divisão, multiplicação, soma e subtração)

console.log(resultado04); 

// Operadores unários 

let incrementar = 10; 

console.log(--incrementar); // Aqui estou tirando 1 da minha variavel 
console.log(++incrementar); // Aqui estou adicionando 1 para a minha variavel 
