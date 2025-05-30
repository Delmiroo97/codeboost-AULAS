const titulo = document.querySelector('.titulo'); 

// console.log(titulo.innerText);

 console.log(titulo.outerHTML); // Todo html do elemento 

 console.log(titulo.innerHTML); //  Html interno

 console.log(titulo.innerText); // Texto sem tags


 titulo.innerText = '<h1>Novo Titulo</h1>'; // A tag vai como texto
 titulo.innerHTML = '<h1>Novo Titulo</h1>'; // A tag vai renderizada