;(function(){

    'use strict';

    const btnAjuda = document.querySelector('#btnAjuda');

    btnAjuda.addEventListener('click', function(evento){

        let listaAjudas = [
            {
                conteudo: 'Bem vindo ao Ceep',
                cor: '#92C4EC'
            },
            {
                conteudo: 'Vc pode criar cartoes',
                cor: 'blue'
            },
            {
                conteudo: 'Vcpode trocar de cores os cartoes',
                cor: 'red'
            }
        ]

        const ajax = new XMLHttpRequest()

        ajax.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes');

        ajax.responseType = 'json';

        ajax.send();

        ajax.addEventListener('load',function(){
            
            listaAjudas = ajax.response.instrucoes
            //for of
            for(let objAjuda of listaAjudas){
                criarCartao(objAjuda)
            }
        })
        
    })

    btnAjuda.classList.remove('no-js');

})()


