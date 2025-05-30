const titulo = document.querySelector('h1')

// console.log(titulo.parentElement); // Pega o elemento pai do h1
// console.log(titulo.previousElementSibling); // Pega o elemento antes da tag do h1
// console.log(titulo.nextElementSibling); // Pega o elemento depois da tag do h1


const item01 = document.querySelector('.item-01');

const item02 = document.querySelector('.item-02');

const textTiulo = document.querySelector('.titulo02');

item02.removeChild(textTiulo);

const novoTitulo = document.querySelector('.new-title');

const tituloh2 = document.createElement('h2'); // criando um h2 novo sem está no html

tituloh2.innerText = 'Novo titulo'; // criando o que vai conter dentro desse h2

tituloh2.classList.add('titulo-novo') // criando uma classe para esse h2 

novoTitulo.appendChild(tituloh2); // adicionando o h2 junto a div new-title