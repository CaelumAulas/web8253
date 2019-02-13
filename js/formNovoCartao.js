;(function(){

    const form = document.querySelector('.formNovoCartao');

    form.addEventListener('submit', function(eventoSubmit){

        eventoSubmit.preventDefault();

        console.log(eventoSubmit);
        console.log('Digite alguma coisa');

    })

    form.classList.remove('no-js');

})()