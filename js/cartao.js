;(function(){

    const listaCartoes = document.querySelectorAll('.cartao');

    for (let indice = 0; indice < listaCartoes.length; indice++) {
        
        const cartao = listaCartoes[indice];

        cartao.addEventListener('focusin', function(){
            cartao.classList.add('cartao--focado');
        })

        cartao.addEventListener('focusout', function(){
            cartao.classList.remove('cartao--focado');
        })

        cartao.addEventListener('change', function(evento){
            const isInputCor = evento.target.classList.contains('opcoesDoCartao-radioTipo');

            if(isInputCor){
                const inputRadio = evento.target;
                this.style.backgroundColor = inputRadio.value;
            }
        })

        cartao.addEventListener('keyup',function(eventoKeyup){
            
            let isSpace = eventoKeyup.code == 'Space';
            let isEnter = eventoKeyup.key == 'Enter';
            let isLabel = eventoKeyup.target.classList.contains('opcoesDoCartao-tipo')

            if((isEnter || isSpace) && isLabel){
                let label = eventoKeyup.target;
                label.click();
            }

        })

        cartao.addEventListener('click',function(evento){
            const isLixeira = evento.target.classList.contains('opcoesDoCartao-remove');

            if(isLixeira){
                cartao.classList.add('cartao--some')
                cartao.addEventListener('transitionend', function(){
                    cartao.remove();
                })
            }
        })
        
    }

})()
