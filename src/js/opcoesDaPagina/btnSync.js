//criar IIFE
;(function(){
    //colocar o use-strict
    'use strict';

    //buscar o botao
    const btnSync = document.querySelector('#btnSync');

    //colocar um click
    btnSync.addEventListener('click', function(){

        btnSync.classList.add('botaoSync--esperando')
        btnSync.classList.remove('botaoSync--sincronizado')


        //pegar todos os cartoes (elementos cartoes)
        const listaElementoCartao = document.querySelectorAll('.cartao');
        //fazer lista nova para receber objetos cartao, no loop do for
        const listaObjetoCartao = [];

        //percorrer todos a lista de elementos cartoes
        for (const cartao of listaElementoCartao) {
            
            //pegar as propriedades, conteudo e cor
            const conteudo = cartao.querySelector('.cartao-conteudo').textContent;
            const cor = cartao.style.backgroundColor;

            //montar um objeto JS
            const objetoCartao = {
                conteudo: conteudo,
                cor: cor
            }

            //armazenar cada objeto criado dentro de uma lista (push de array)
            listaObjetoCartao.push(objetoCartao)
        }//fim for

        const dadosUser = {
            usuario: 'vanessa',
            cartoes: listaObjetoCartao
        }

        const ajax = new XMLHttpRequest();
        ajax.open('POST','http://ceep.herokuapp.com/cartoes/salvar');
        ajax.responseType = 'json';
        ajax.setRequestHeader('Content-Type', 'application/json');

        const dadosUserString = JSON.stringify(dadosUser);

        ajax.send(dadosUserString);

        ajax.addEventListener('load',function(){
            console.log(ajax.response);
            btnSync.classList.remove('botaoSync--esperando')
            btnSync.classList.add('botaoSync--sincronizado')
        })

        ajax.addEventListener('error',function(){
            btnSync.classList.remove('botaoSync--esperando')
            btnSync.classList.add('botaoSync--deuRuim')
        })



    });

    //remover classe no-js
    btnSync.classList.remove('no-js');

})()
