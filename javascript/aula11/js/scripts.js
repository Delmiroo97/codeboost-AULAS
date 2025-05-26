const alldropdowns = document.querySelectorAll('.dropdown')

// alldropdowns.forEach(function (item, index, array) {
//     item.addEventListener('click', function() {
//         console.log('Estou clicando no item' + index);
//     })
// })

// Arrow Function
alldropdowns.forEach((item, index, array) => {
    console.log(item);
})