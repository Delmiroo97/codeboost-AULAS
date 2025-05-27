// mapeando o o id do Botão
const button = document.getElementById('js-btn');
// const htlmDocument = document.documentElement; 

// Callback separando a função do evento
function handelClick () {
    console.log('cliquei')
}


// evento
button.addEventListener('click' , handelClick); 