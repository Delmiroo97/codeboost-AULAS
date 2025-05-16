// function areaQuadrada(lado) {
//     return lado * lado;
// }

// console.log(areaQuadrada(6)); 

function imc(peso, altura) {  // criando a função 
    const imc = peso / altura ** 2; 

    return imc;
}

// console.log(imc(80, 1.80)); 
console.log(imc(70, 1.60)); // executando a função

function carroFavorito(carro) { // criando a função 
    if(carro === 'Fusca') {
        console.log('O carro favorito é o fusca');
    } else if (carro === 'Gol') {
        console.log('O carro favorito é o Gol');
    } else {
    console.log('Nenhum dos carros');
    }
}      

carroFavorito('Gol'); // executando a função 

