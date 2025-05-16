var carros = ['Fusca', 'Brasilia', 'Monza', 'Gol'] // Array  (lista)

// Métodos e propriedades 

carros.pop() // Remove o último paramentro da lista 

carros.push('Celta')  // Adiciona um parâmetro ao final da lista  

carros.length; // Me informa a quantidade de parâmetros que tem na minha lista

console.log(carros); 

// for Loop 

for(var numero = 0; numero <= 100; numero ++) {
    console.log(numero);                          // retorna de 0 a 99 no console
}

var carros = ['Fusca', 'Brasilia', 'Monza', 'Gol']; 

for(var i = 0; i < carros.length; i ++) { // nesse código eu incremento os parametros que estão na lista de acordo o indice deles
    console.log([i]);

    if(carros[i] === 'Brasilia') {
        break;                         // Ultilizo o break para frear a incrementação do loop 
    }

}

//  forEach 

var carros = ['Fusca', 'Brasilia', 'Monza', 'Gol']

carros.forEach(function(item, index, array) { // nesse código usando forEach eu posso executar uma função para cada item da array 
    console.log(item + index + array);
}) 