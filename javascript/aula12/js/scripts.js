// const button = document.getElementById('js-btn'); {
//     button.addEventListener("click", () => {
//         document.documentElement.classList.toggle('theme-black');
//     });
// }


// Primeiro button

const button1 = document.getElementById('js-btn'); {
    button1.addEventListener('click', () => {  
        document.documentElement.classList.toggle('theme-black');
});
}

// Segundo button

// aqui eu mapeio o id que coloquei lá no html 
const mudarImg = document.getElementById('js-btn2'); 
const image = document.getElementById('js-img');


    // aqui eu crio a função de click no button
   mudarImg.addEventListener('click', () => {

    // aqui eu crio a variavel para alterar o html
    let htmlDocument = document.documentElement;

    // aqui eu passo a função de toggle  na classe que criei fora do html
    htmlDocument.classList.toggle('theme-black');

    // e aqui são as condições que passo para ativar o tema e mudar a imagem no html
    if (htmlDocument.classList.contains('theme-black')) {
        image.setAttribute("src", "img/perfil2.png");
        image.setAttribute("alt", "LOGO 02"); 
    } else {
        image.setAttribute("src", "img/perfil1.png");
        image.setAttribute("alt", "LOGO 01");
    }
}); 



