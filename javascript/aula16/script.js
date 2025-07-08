

// Exemplo 1

const titulo = document.querySelector('.titulo')

console.log(titulo.parentElement); // Pai do elemento titulo que é a div area-texto.
console.log(titulo.parentElement.parentElement); // Pai do Pai do elemento que é Body, a tag que engloba tudo.
console.log(titulo.previousElementSibling); // elemento anterior que é a Tag Span
console.log(titulo.nextElementSibling); // Próximo elemento que é a Tag p com o paragrafro. 


// Exemplo 2


const item01 = document.querySelector('.item-01');

const item02 = document.querySelector('.item-02');

const titulos = document.querySelector('.titulos');


item01.appendChild(item02); // Adicionei o item02 dentro do item01
item02.removeChild(titulos); // Removi o Titulo que estava dentro do item02


// Exemplo 3 


const areaTitulos = document.querySelector('.area-titulo'); // selecionei o elemento 

const novoTitulo = document.createElement('h2'); // criei um novo titulo h2 

novoTitulo.innerText = 'Criei um novo titulo' // coloquei o texo dentro desse h2 

novoTitulo.classList.add('titulo-novo') // criei uma nova class para esse titulo 

areaTitulos.appendChild(novoTitulo); // coloquei o novo titulo criado dentro do elemento area-titulo


