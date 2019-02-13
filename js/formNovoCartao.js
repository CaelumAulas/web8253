;(function(){

    const form = document.querySelector('.formNovoCartao');

    form.addEventListener('submit', function(eventoSubmit){

        eventoSubmit.preventDefault();

        const textarea = form.querySelector('.formNovoCartao-conteudo'),
              isTextareaEmpty = textarea.value.trim().length === 0;

        if(isTextareaEmpty){
            const msgErro = document.createElement('p');

            msgErro.textContent = 'Digite alguma coisa';
            msgErro.classList.add('formNovoCartao-msg');

            textarea.insertAdjacentElement('afterend', msgErro)

            msgErro.addEventListener('animationend', function(){
                this.remove()
            })
        }
        else {

            let objeto = {
                conteudo: textarea.value 
            }

            criarCartao(objeto);

            form.reset();
            textarea.focus();
        }

    })

    form.classList.remove('no-js');

})()
