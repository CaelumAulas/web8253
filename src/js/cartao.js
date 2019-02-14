;(function(){

    //ajuda a escrever um JS sem erros de esquecer declarar variaveis, nomes repetidos etc
    'use strict';

    let numeroCartao = 1;

    window.criarCartao = function (objetoCartao) {
    
        const cartao = document.createElement('article');
        const mural = document.querySelector('.mural');
    
        cartao.id = 'cartao_'+numeroCartao;
        cartao.classList.add('cartao');
        cartao.tabIndex = 0;
    
        cartao.style.backgroundColor = objetoCartao.cor;
    
        cartao.innerHTML = `
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg>
                <use xlink:href="#iconeRemover"></use>
            </svg>
            </button>
    
            <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo"
            checked>
            <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;"
            tabindex="0">
            Padrão
            </label>
    
            <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}"
            class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;"
            tabindex="0">
            Importante
            </label>
    
            <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;"
            tabindex="0">
            Tarefa
            </label>
    
            <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao${numeroCartao}"
            class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;"
            tabindex="0">
            Inspiração
            </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${objetoCartao.conteudo}</p>
        `
    
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
        
        mural.insertAdjacentElement('afterbegin',cartao);
        numeroCartao++;
    
    }
    
})()














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
